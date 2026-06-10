# Presentum — Advanced Features (universalui + codedesigner distilled)

Date: 2026-06-09. Source: universalui SKILL + tool-catalog-2026-05-27, codedesigner project docs. All effects are **screen-only and print-safe** — gate behind `prefers-reduced-motion`, never required to read the doc.

## Effect → tool map (from universalui)

| Need | Prefer | Avoid | Print behavior |
|---|---|---|---|
| Money/KPI change | Number Flow (web) / count-up JS | Jumpy redraws | Show final value |
| Premium 3D / hero still | React Three Fiber + drei + react-postprocessing, Spline export | Core content trapped in 3D | Embed pre-rendered PNG/SVG |
| Stateful animation | Rive | Disconnected GIFs | Static poster frame |
| Generated video asset | Remotion | Hand-edited one-offs | n/a (separate deliverable) |
| Scroll reveal / micro-motion | Motion (motion.dev), CSS scroll-driven animations | Confetti spam | Reveal-complete state |
| Charts | ECharts (screen) | Canvas charts that print blank | Pre-rendered static SVG |
| Mobile scan/signature | React Native Skia | Heavy WebGL on normal screens | — |
| Icons | Lucide (primary) · Simple Icons (brands) · Phosphor (expressive) · Tabler (admin breadth) | 4 icon sets in one toolbar | inline SVG |

## Doc-specific wow patterns (adapted from invoice/workflow set)

- **Timeline light-trail**: Draft → Sent → Seen → Due → Paid (state, see `document.html .trail`).
- **Trust seal**: validated invoice (XRechnung/ZUGFeRD) shows a subtle ✓ badge (see `invoice.html .badge`).
- **Signature ink**: approval line writes itself (Skia/Rive on screen; static line in print).
- **Payment-success sweep**: gold-foil + short confetti + haptic (interactive deliverables only).
- **OCR scan-ray**: light beam scans a PDF preview, fields snap into inputs.
- **Number Flow finance cards**: tax/revenue/open/overdue animate smoothly.

## Modern CSS that earns its place (Baseline 2024→2026)

- `@page` + margin-boxes (`@top-center`, `@bottom-right`) — running headers/footers.
- `string-set` + `content: string()` — running chapter/section titles in print.
- `break-inside / break-before / break-after: avoid|page` — clean page breaks.
- `text-wrap: balance` (headings) / `pretty` (paragraphs).
- Container queries — same HTML adapts screen vs print.
- `@scope` + native nesting — less CSS, no leakage.
- `print-color-adjust: exact` — keep backgrounds/brand colors in PDF.
- `color-mix()` + `color-scheme: light dark` — themeable tokens, auto dark mode.
- CSS scroll-driven animations — scroll reveals without JS (screen only).
- Anchor positioning — footnotes/tooltips without JS.

## Generative / symbolic design tooling (from codedesigner)

Render once → SVG/PNG → embed as `data:` URI. Never run live in a doc.

- **Shaders / 3D stills**: filament, R3F snapshots, Spline export.
- **Generative art** (covers, dividers, backgrounds): WaveFunctionCollapse, Lenia, harmonograph, Chladni/cymatics.
- **Diagrams/charts**: Mermaid → SVG, D3 → static SVG, ECharts → SVG snapshot.
- Full catalogs in `~/BASE/projects/codedesigner/`:
  - `code-design-tools-2026.md` (290 tools)
  - `50-stacks-2026.md` (50 stacks)
  - `pipelines-100-2026.md` (100 pipelines)
  - `symbolic-systems-viz-2026.md` (symbolic/sacred-geometry viz)
  - `video-tools-2026.md` (Remotion + video pipeline)

## HTML→PDF engine matrix (verified 2026-06-09, Apryse 10-method comparison)

| Method | Engine | JS | CSS Grid/Flex | 2026 status |
|---|---|---|---|---|
| Self-contained HTML + Ctrl+P | Browser | ✅ | Full | Best for human delivery |
| Playwright `page.pdf()` | Headless Chrome | ✅ | Full | **Top pick (Node server)** |
| Paged.js | Browser polyfill | ✅ | Full | Print-CSS in browser |
| WeasyPrint | Python native | ❌ | Partial | Good static/Python |
| PrinceXML / DocRaptor | Premium print | ✅ | Full | Best fidelity (paid) |
| Apryse / iText | Native C++/Java | ✅ | Full | Enterprise/regulated |
| Puppeteer | Headless Chrome | ✅ | Full | Maintenance-mode, memory leaks |
| jsPDF + html2canvas | Canvas image | — | No | ⚠️ image dump, not searchable |
| wkhtmltopdf | Legacy WebKit | ❌ | No | ☠️ dead 2023, SSRF risk |
| Typst | Native (non-HTML) | — | — | Markdown→PDF, ~90× faster than LaTeX |
