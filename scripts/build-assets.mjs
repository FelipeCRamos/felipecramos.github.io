// Renders the share images with a local Chrome, then rebuilds.
// Run after changing case study titles, and commit the results in public/.
import { execFileSync, spawn } from 'node:child_process';
import { mkdirSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const CHROME = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 4329;
const base = `http://localhost:${PORT}`;
const astro = resolve('node_modules/.bin/astro');
const chrome = (...args) => execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', ...args], { stdio: 'ignore' });

execFileSync(astro, ['build'], { stdio: 'inherit' });
// Astro's preview command runs as a background service, so it has to be stopped explicitly.
spawn(astro, ['preview', '--port', String(PORT)], { stdio: 'ignore' });
try {
  for (let i = 0; ; i++) {
    try { if ((await fetch(base)).ok) break; } catch {}
    if (i > 50) throw new Error('Preview server did not start');
    await new Promise((r) => setTimeout(r, 200));
  }
  mkdirSync('public/og', { recursive: true });
  // dist/og also holds the images copied from public/og, so only the page folders count.
  const keys = readdirSync('dist/og', { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name);
  for (const key of keys) {
    chrome('--window-size=1200,630', '--virtual-time-budget=3000', `--screenshot=${resolve('public/og', `${key}.png`)}`, `${base}/og/${key}/`);
  }
} finally {
  execFileSync(astro, ['preview', 'stop'], { stdio: 'ignore' });
}
execFileSync(astro, ['build'], { stdio: 'inherit' });
