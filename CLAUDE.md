# Project Guidelines for AI Agents

This file contains project-specific instructions for Claude Code and other AI agents.

## Project Overview

This is Vipul Gupta's portfolio/documentation site built with Docusaurus 3.9.2.
- **Live site**: https://docs.mixster.dev
- **Deployment**: GitHub Pages via GitHub Actions

## Key Architecture Decisions

### SEO Component

Located at `src/components/SEO.tsx`:
- Used by all custom pages for meta tags
- Canonical URL regex: `([^:])\/+` preserves `https://`
- Default OG image: `/img/og-image.webp`

## File Locations

```
src/
├── components/
│   └── SEO.tsx              # Shared SEO meta tags
├── data/
│   └── testimonials.ts      # Homepage testimonials data
├── pages/
│   └── index.tsx            # Homepage
docs/                        # Docusaurus markdown docs
static/
└── img/
    ├── avatar.webp          # Web avatar
    └── og-image.webp        # Social sharing image
```

## Git Commit Guidelines

- Always sign commits: `git commit -s -m "message"`
- Do NOT add Co-Authored-By tags
- Use conventional commit style when appropriate

## Common Tasks

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

- `docusaurus/plugin-client-redirects` - Trailing slash redirects
