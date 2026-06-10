# Changelog

All notable changes to Presentum. Newest first.

## [0.1.0] — 2026-06-09

### Added
- Initial Presentum project + Claude skill (`/presentum`).
- `templates/document.html` — premium report/proposal: auto-TOC, scroll-spy, dark/light tokens, count-up KPIs, timeline trail, in-page search, full print-CSS (`@page` margin-boxes, running header, page numbers, `break-inside:avoid`, link-expansion).
- `templates/deck.html` — slide deck: scroll-snap fullscreen on screen, keyboard nav, gradient mesh, 1-slide-per-page A4 landscape in print.
- `templates/invoice.html` — invoice/receipt: totals, validation trust badge, A4 print-CSS.
- `scripts/render.mjs` — Playwright HTML→PDF renderer (print media, `preferCSSPageSize`, `printBackground`, searchable text).
- `references/advanced-features.md` — distilled effects (universalui) + generative design tooling (codedesigner) + verified HTML→PDF engine matrix (2026).
- `README.md` — quick start + HTML-vs-PDF + engine choice.

### Added (2026-06-10)
- 5 mega examples in `examples/`: pitch-deck (gradient mesh + count-up), whitepaper (generative harmonograph cover + static-SVG charts + footnotes), certificate (generative guilloché border + seal), résumé (skill bars), pricing (tier cards + monthly/yearly toggle).
- `scripts/shoot.mjs` — Playwright screenshot helper.
- `assets/` — social-preview (1280×640) + gallery PNGs, `social-preview.html` source.
- `package.json`, `LICENSE` (MIT), premium README with gallery.
- Published to GitHub (Supersynergy/presentum) + Gitea (git.marketdeck.io/Supersynergy/presentum) with social preview.

### Verified
- 2026-06-10: Playwright 1.60.0 + chromium installed; `render.mjs` rendered all 3 templates AND 5 examples → searchable PDFs (pitch 5.2M, whitepaper 153K, certificate 77K, resume 84K, pricing 106K). Text extraction via pdftotext confirmed (not image dump). Screenshots visually checked.

### Notes
- Research basis (2026-06-09): Apryse 10-method comparison, ghmax code survey, Synapse recall. HTML = best authoring layer; `wkhtmltopdf` dead/insecure; `jsPDF+html2canvas` = non-searchable image dump (avoid).
