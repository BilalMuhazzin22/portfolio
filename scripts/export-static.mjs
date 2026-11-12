// Turns the production build into plain static files for GitHub Pages.
// Usage: NEXT_PUBLIC_SITE_URL=https://example.github.io npm run export:pages
// Output goes to ./out; copy its contents into the Pages repository.
import { spawn } from 'node:child_process';
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? '').replace(/\/$/, '');
if (!siteUrl) throw new Error('Set NEXT_PUBLIC_SITE_URL to the address the site will be published at.');
const port = Number(process.env.EXPORT_PORT ?? 4173);
const root = process.cwd();
const out = path.join(root, 'out');
// Build leftovers and source images the pages never reference.
const skip = new Set(['.assetsignore', '.vite', '_headers', 'vinext-client-entry-manifest.json', 'bilal-character-transparent.png', 'bilal-stylized-character.png', 'chrome-emblem.png', 'optical-prism-hero.png', 'mono']);

const run = (args, opts = {}) => spawn(process.execPath, [path.join(root, 'node_modules', 'vinext', 'dist', 'cli.js'), ...args], { cwd: root, env: process.env, ...opts });
const done = child => new Promise((resolve, reject) => child.on('exit', code => code === 0 ? resolve() : reject(new Error(`vinext exited with ${code}`))));

await done(run(['build'], { stdio: 'inherit' }));

const server = run(['start', '-p', String(port)], { stdio: ['ignore', 'pipe', 'inherit'] });
server.stdout.on('data', () => {});
try {
  const origin = `http://localhost:${port}`;
  let home;
  for (let attempt = 0; attempt < 60 && !home; attempt++) {
    try { const res = await fetch(`${origin}/`); if (res.ok) home = await res.text(); } catch {}
    if (!home) await new Promise(resolve => setTimeout(resolve, 500));
  }
  if (!home) throw new Error('The production server did not start.');
  const notFound = await (await fetch(`${origin}/this-page-does-not-exist`)).text();

  await rm(out, { recursive: true, force: true });
  await mkdir(out, { recursive: true });
  await cp(path.join(root, 'dist', 'client'), out, { recursive: true, filter: source => !skip.has(path.basename(source)) });
  await writeFile(path.join(out, 'index.html'), home);
  await writeFile(path.join(out, '404.html'), notFound);
  await writeFile(path.join(out, '.nojekyll'), '');
  await writeFile(path.join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
  await writeFile(path.join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>\n  </url>\n</urlset>\n`);
  if (!existsSync(path.join(out, '_next'))) throw new Error('Export is missing the _next assets.');
  console.log(`Static site written to ${out}`);
} finally {
  server.kill();
}
