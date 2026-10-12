import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const output = path.join(root, 'web/out');

export async function checkStatic(directory = output) {
  const html = await readFile(path.join(directory, 'index.html'), 'utf8');
  for (const value of ['Q141603611', 'Q139770210', 'Q139770179',
    'application/ld+json', 'rel="canonical"', 'og:image', 'twitter:card',
    'mailto:ginhac@apogee-consult.com', 'id="contact"', 'id="faq"']) {
    if (!html.includes(value)) throw new Error(`Missing exported content: ${value}`);
  }
  if (/<form\b|\/_next\/image\?/i.test(html)) throw new Error('Server-dependent HTML remains');
  const jsonLd = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
  const graph = JSON.parse(jsonLd?.[1] ?? '{}')['@graph'];
  for (const type of ['Person', 'Organization', 'WebSite', 'ProfilePage', 'FAQPage']) {
    if (!graph?.some(node => node['@type'] === type)) throw new Error(`Missing schema: ${type}`);
  }
  for (const file of ['404.html', 'robots.txt', 'sitemap.xml', 'llms.txt',
    'icon', 'apple-icon', 'opengraph-image', 'twitter-image', 'media/portrait.jpg', '.htaccess']) {
    if (!(await stat(path.join(directory, file))).size) throw new Error(`Empty file: ${file}`);
  }
  for (const file of ['icon', 'apple-icon', 'opengraph-image', 'twitter-image']) {
    const bytes = await readFile(path.join(directory, file));
    if (bytes.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') throw new Error(`Invalid PNG: ${file}`);
  }
  // Every local stylesheet, script and image referenced by the HTML must exist.
  for (const match of html.matchAll(/(?:src|href)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const url = match[1];
    if (url === '/' || url.startsWith('//')) continue;
    await stat(path.join(directory, decodeURIComponent(url)));
  }
  const styles = await readdir(path.join(directory, '_next/static/css'));
  const css = (await Promise.all(styles.filter(file => file.endsWith('.css'))
    .map(file => readFile(path.join(directory, '_next/static/css', file), 'utf8')))).join('\n');
  for (const selector of ['.container-tight', '.btn-primary', '.bg-white']) {
    if (!css.includes(selector)) throw new Error(`Missing compiled styles: ${selector}`);
  }
  async function checkFiles(folder) {
    for (const entry of await readdir(folder, { withFileTypes: true })) {
      if (entry.name.startsWith('.env') || entry.name === 'server.js' || entry.name === 'node_modules') {
        throw new Error(`Unexpected server file in export: ${entry.name}`);
      }
      if (entry.isSymbolicLink()) throw new Error('Symlinks are not allowed in the export');
      if (entry.isDirectory()) await checkFiles(path.join(folder, entry.name));
    }
  }
  await checkFiles(directory);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await checkStatic();
  console.log('Static export verified: HTML, SEO, Wikidata, images and local assets.');
}
