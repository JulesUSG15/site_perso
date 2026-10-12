import { cp, mkdir, rename, rm, lstat, chmod, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { root, output, checkStatic } from './check-static.mjs';

// Only the export is published. Sources and environment files stay outside Apache.
export async function deployStatic(base = root, source = output, validate = checkStatic) {
  await validate(source);
  const lock = path.join(base, '.deploy.lock');
  await mkdir(lock); // Refuse concurrent deploys.
  const stamp = `${Date.now()}-${process.pid}`;
  const stage = path.join(base, `.deploy-stage-${stamp}`);
  const target = path.join(base, 'public');
  const backup = path.join(base, '.deploy-backups', stamp);
  let moved = false;
  try {
    const current = await lstat(target).catch(error => {
      if (error.code !== 'ENOENT') throw error;
      return null;
    });
    if (current && (!current.isDirectory() || current.isSymbolicLink())) {
      throw new Error('public must be a real directory, not a symlink');
    }
    await cp(source, stage, { recursive: true });
    async function permissions(folder) {
      await chmod(folder, 0o755);
      for (const entry of await readdir(folder, { withFileTypes: true })) {
        const file = path.join(folder, entry.name);
        if (entry.isDirectory()) await permissions(file);
        else await chmod(file, 0o644);
      }
    }
    await permissions(stage);
    await validate(stage);
    if (current) {
      await mkdir(path.dirname(backup), { recursive: true, mode: 0o700 });
      await rename(target, backup);
      moved = true;
    }
    try {
      await rename(stage, target);
    } catch (error) {
      if (moved) await rename(backup, target);
      throw error;
    }
    console.log(`Published: ${target}${moved ? `\nPrevious version: ${backup}` : ''}`);
    return { target, backup: moved ? backup : null };
  } finally {
    await rm(stage, { recursive: true, force: true });
    await rm(lock, { recursive: true, force: true });
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await deployStatic();
}
