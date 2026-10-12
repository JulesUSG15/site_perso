import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm, symlink, stat } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { deployStatic } from './deploy-static.mjs';

async function fixture(t) {
  const base = await mkdtemp(path.join(os.tmpdir(), 'site-static-test-'));
  t.after(() => rm(base, { recursive: true, force: true }));
  const source = path.join(base, 'export');
  await mkdir(source);
  await writeFile(path.join(source, 'index.html'), 'new website');
  await writeFile(path.join(base, '.env'), 'SMTP_PASSWORD=private');
  return { base, source };
}
const validate = async dir => assert.equal(await readFile(path.join(dir, 'index.html'), 'utf8'), 'new website');

test('publishes only export, keeps backup and makes files readable under restrictive umask', async t => {
  const { base, source } = await fixture(t);
  await mkdir(path.join(base, 'public'));
  await writeFile(path.join(base, 'public/index.html'), 'old website');
  const oldMask = process.umask(0o077);
  let result;
  try { result = await deployStatic(base, source, validate); }
  finally { process.umask(oldMask); }
  assert.equal(await readFile(path.join(result.backup, 'index.html'), 'utf8'), 'old website');
  assert.equal(await readFile(path.join(result.target, 'index.html'), 'utf8'), 'new website');
  assert.equal((await stat(path.join(result.target, 'index.html'))).mode & 0o777, 0o644);
  await assert.rejects(stat(path.join(result.target, '.env')), { code: 'ENOENT' });
});
test('invalid export leaves the live site untouched', async t => {
  const { base, source } = await fixture(t);
  await mkdir(path.join(base, 'public'));
  await writeFile(path.join(base, 'public/index.html'), 'live');
  await assert.rejects(deployStatic(base, source, async () => { throw new Error('invalid'); }));
  assert.equal(await readFile(path.join(base, 'public/index.html'), 'utf8'), 'live');
});
test('refuses a symlink document root and releases the lock', async t => {
  const { base, source } = await fixture(t);
  await symlink(source, path.join(base, 'public'));
  await assert.rejects(deployStatic(base, source, validate), /real directory/);
  await assert.rejects(stat(path.join(base, '.deploy.lock')), { code: 'ENOENT' });
});
