import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { output } from './check-static.mjs';

const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
  '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
createServer(async (req, res) => {
  try {
    const url = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (url.split('/').some(part => part.startsWith('.'))) throw new Error('Hidden path');
    const file = path.resolve(output, `.${url === '/' ? '/index.html' : url}`);
    if (!file.startsWith(output + path.sep)) throw new Error('Invalid path');
    if (!(await stat(file)).isFile()) throw new Error('Not a file');
    res.setHeader('Content-Type', /\/(icon|apple-icon|opengraph-image|twitter-image)$/.test(file)
      ? 'image/png' : types[path.extname(file)] ?? 'application/octet-stream');
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(await readFile(path.join(output, '404.html')).catch(() => 'Run npm run build first.'));
  }
}).listen(Number(process.env.PORT ?? 3000), '127.0.0.1', () => {
  console.log(`Static preview: http://127.0.0.1:${process.env.PORT ?? 3000}`);
});
