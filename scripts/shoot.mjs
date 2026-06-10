#!/usr/bin/env node
// Screenshot helper: capture PNG of an HTML file at a given viewport.
// Usage: node scripts/shoot.mjs <input.html> <out.png> [W] [H] [--full]
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve, basename } from 'node:path';
const a = process.argv.slice(2);
const input = a[0], out = a[1];
const W = +(a[2] || 1280), H = +(a[3] || 800);
const full = a.includes('--full');
if (!input || !out) { console.error('usage: shoot.mjs in.html out.png [W] [H] [--full]'); process.exit(1); }
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
await p.goto(pathToFileURL(resolve(input)).href, { waitUntil: 'networkidle' });
await p.waitForTimeout(900); // let intro animations settle
await p.screenshot({ path: out, fullPage: full, clip: full ? undefined : { x: 0, y: 0, width: W, height: H } });
await b.close();
console.log(`✓ ${basename(input)} -> ${out} (${W}x${H}${full ? ' full' : ''})`);
