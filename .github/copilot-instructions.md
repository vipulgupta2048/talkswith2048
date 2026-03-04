# Copilot Instructions

## Project Overview

Docusaurus 3.9.2 portfolio/documentation site for Vipul Gupta. Live at https://docs.mixster.dev, deployed to GitHub Pages via GitHub Actions on push to `master`.

## Build & Lint Commands

```bash
npm run build          # Build site (converts docs images to webp first)
npm run start          # Dev server (also converts images to webp)
npm run serve          # Serve built site locally
npm run lint           # ESLint + Prettier check
npm run lint:fix       # Auto-fix lint issues
npm run typecheck      # TypeScript type checking (tsc)
```

Check for server already running on localhost and always review the actual output visually to make sure changes look as expected and planned. 

No test suite exists. Validate changes with `npm run build`.

## Architecture

### Docs as Root Routes

Docs use `routeBasePath: "/"` — markdown files in `docs/` map directly to site root paths (e.g., `docs/Introduction.md` → `/Introduction`). The sidebar is manually defined in `sidebars.js`.

### Custom Pages

- `src/pages/index.tsx` — Homepage built from modular components in `src/components/homepage/` (Hero, FlipDotMetrics, TimelineScrubber, GreatestHits, BeyondTheCode, Testimonials, CommandPalette)
- `src/pages/ai-workshop.tsx` — Workshop page with a companion PDF export

### Workshop Page: Dual Rendering

The AI Workshop has **two rendering targets** sharing a single data source:

| File | Renders via |
|------|------------|
| `src/pages/ai-workshop.tsx` | HTML/CSS (browser) |
| `src/components/WorkshopPDF.tsx` | @react-pdf/renderer (PDF download) |
| `src/data/workshopData.ts` | **Shared content — single source of truth** |

**Rules:**
1. Edit content only in `src/data/workshopData.ts` — never directly in the TSX files
2. Layout/visual changes to one rendering target **must** be mirrored in the other
3. `@react-pdf/renderer` cannot use WebP (use PNG/JPG), HTML elements (use View/Text/Image), or dynamic Google Fonts (use fontsource CDN)
4. PDF component must be wrapped in `BrowserOnly` — it's client-side only

### SEO Component

`src/components/SEO.tsx` is used by all custom pages for meta tags. Default OG image: `/img/og-image.webp`.

### Image Pipeline

The build runs `convert-images-to-webp.sh` which converts PNG/JPG in `docs/img/` to WebP and updates markdown references. Requires `cwebp` installed locally (gracefully skips if missing). Static assets in `static/img/` are NOT auto-converted — `avatar.png` is kept deliberately for PDF compatibility.

### Styling

SCSS via `docusaurus-plugin-sass`. Global styles in `src/css/custom.scss` with `src/css/mixins.scss`. Homepage components use CSS Modules (`*.module.scss`).

## Conventions

### Git Commits

Always sign commits: `git commit -s -m "message"`. Do NOT add Co-Authored-By tags from Copilot. 

### Formatting

- Double quotes (not single) — configured in `.prettierrc`
- Trailing commas everywhere (`"trailingComma": "all"`)
- ESLint with `@typescript-eslint` + Prettier integration

### Spelling

CSpell is configured (`cspell.json`) with a custom dictionary at `cspell-words.txt`. Add project-specific words there.

### Homepage Components

Each homepage section is a self-contained component pair: `ComponentName.tsx` + `ComponentName.module.scss` in `src/components/homepage/`. Testimonials data lives in `src/data/testimonials.ts`.

### Webpack Customization

A custom `bufferPolyfillPlugin` in `docusaurus.config.ts` provides `Buffer` polyfill needed by `@react-pdf/renderer`.
