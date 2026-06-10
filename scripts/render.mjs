#!/usr/bin/env node
// Presentum HTML -> PDF renderer (Playwright, pixel-perfect, searchable text).
// Usage: node scripts/render.mjs <input.html> [output.pdf] [--landscape] [--format A4|Letter]
// Needs: bun add -d playwright  (or npm i -D playwright) + npx playwright install chromium
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve, basename } from 'node:path';
import { existsSync } from 'node:fs';

const args = process.argv.slice(2);
const flags = new Set(args.filter(a => a.startsWith('--')));
const pos = args.filter(a => !a.startsWith('--'));
const input = pos[0];
if (!input || !existsSync(input)) {
  console.error('usage: node scripts/render.mjs <input.html> [output.pdf] [--landscape] [--format A4|Letter]');
  process.exit(1);
}
const out = pos[1] || resolve(input.replace(/\.html?$/i, '') + '.pdf');
const fmtArg = args.find(a => a.startsWith('--format'));
const format = fmtArg ? fmtArg.split('=')[1] || pos[2] || 'A4' : 'A4';
const landscape = flags.has('--landscape');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.emulateMedia({ media: 'print' });           // honor @media print
await page.goto(pathToFileURL(resolve(input)).href, { waitUntil: 'networkidle' });
await page.pdf({
  path: out,
  format,
  landscape,
  printBackground: true,                                // keep colors/backgrounds
  preferCSSPageSize: true,                              // respect @page size/margins
});
await browser.close();
console.log(`✓ ${basename(input)} -> ${out}`);
