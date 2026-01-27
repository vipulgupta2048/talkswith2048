# Project Guidelines for AI Agents

This file contains project-specific instructions for Claude Code and other AI agents.

## Project Overview

This is Vipul Gupta's portfolio/documentation site built with Docusaurus 3.9.2.
- **Live site**: https://docs.mixster.dev
- **Deployment**: GitHub Pages via GitHub Actions

## Key Architecture Decisions

### Workshop Page (ai-workshop)

The AI Workshop page has **two rendering targets** that share content:

| File | Purpose | Rendering System |
|------|---------|------------------|
| `src/pages/ai-workshop.tsx` | Web page | HTML/CSS (browser) |
| `src/components/WorkshopPDF.tsx` | PDF download | @react-pdf/renderer |
| `src/data/workshopData.ts` | **Shared content** | TypeScript data |

**Why this exists**: HTML and @react-pdf use different primitives (`<div>` vs `<View>`), so components can't be shared. However, **content data IS shared** via `workshopData.ts`.

**IMPORTANT**: When updating workshop content:
1. Edit `src/data/workshopData.ts` (single source of truth)
2. Both web and PDF will reflect changes
3. Do NOT edit content directly in the TSX files

**CRITICAL**: Always sync changes between web page and PDF:
- Any visual/layout change to `ai-workshop.tsx` MUST also be applied to `WorkshopPDF.tsx`
- Any visual/layout change to `WorkshopPDF.tsx` MUST also be applied to `ai-workshop.tsx`
- This includes: stats, logo bars, sections, styling changes, new components
- The web and PDF should always show the same information

### PDF Generation Notes

- **@react-pdf/renderer** does NOT support:
  - WebP images (use PNG/JPG)
  - Dynamic Google Fonts URLs (use fontsource CDN)
  - HTML elements (use View, Text, Image primitives)
- Fonts are loaded from `cdn.jsdelivr.net/fontsource/`
- Avatar image must be PNG: `static/img/avatar.png`

### SEO Component

Located at `src/components/SEO.tsx`:
- Used by all custom pages for meta tags
- Canonical URL regex: `([^:])\/+` preserves `https://`
- Default OG image: `/img/og-image.webp`

## File Locations

```
src/
├── components/
│   ├── SEO.tsx              # Shared SEO meta tags
│   └── WorkshopPDF.tsx      # PDF document (react-pdf)
├── data/
│   └── workshopData.ts      # Shared workshop content
├── pages/
│   └── ai-workshop.tsx      # Workshop web page
docs/                        # Docusaurus markdown docs
static/
└── img/
    ├── avatar.webp          # Web avatar
    ├── avatar.png           # PDF avatar (react-pdf needs PNG)
    └── og-image.webp        # Social sharing image
```

## Git Commit Guidelines

- Always sign commits: `git commit -s -m "message"`
- Do NOT add Co-Authored-By tags
- Use conventional commit style when appropriate

## Common Tasks

### Adding content to workshop page
1. Edit `src/data/workshopData.ts`
2. Run `npm run build` to verify
3. Both web and PDF update automatically

### Fixing PDF issues
- Font 404s → Check fontsource CDN URLs
- Image errors → Ensure PNG format (not webp)
- Layout issues → Check @react-pdf StyleSheet

### SEO changes
- Edit `src/components/SEO.tsx` for global changes
- Per-page SEO: pass props to `<SEO />` component

## Build & Deploy

```bash
npm run build    # Build site
npm run serve    # Test locally
git push         # Auto-deploys via GitHub Actions
```

## Dependencies to Note

- `@react-pdf/renderer` - PDF generation (browser-only, use BrowserOnly wrapper)
- `jspdf` + `html2canvas` - Available but NOT used (quality issues)
- `docusaurus/plugin-client-redirects` - Trailing slash redirects
