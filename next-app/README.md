# Srinivas M. P. — Portfolio (Next.js)

Personal site / resume built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.
Single-page editorial layout, restrained typography, no AI-flavored decoration.

## Stack

- Next.js 14 + App Router
- TypeScript (strict)
- Tailwind CSS
- next/font (Inter + JetBrains Mono — embedded at build, no runtime CDN)
- Static export (`next export` via `output: 'export'`)

## Develop

```bash
cd next-app
npm install
npm run dev
# http://localhost:3000
```

## Build & static export

```bash
npm run build
# outputs to ./out — deploy that folder anywhere static
```

## Type-check

```bash
npm run type-check
```

## Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # The single page
│   └── globals.css      # Theme tokens (light + dark) + Tailwind base
├── components/
│   ├── Header.tsx       # Sticky nav, theme toggle, resume button
│   ├── Hero.tsx
│   ├── Section.tsx      # Section shell (eyebrow + title)
│   ├── About.tsx
│   ├── Experience.tsx   # Year | role · company · highlights
│   ├── Projects.tsx     # 6 featured projects in a 2-col grid
│   ├── Stack.tsx        # Skill groups + brand-logo row
│   ├── BrandRow.tsx     # Local SVG brand logos
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Icon.tsx         # Inline SVG line icons
└── data/
    └── resume.ts        # Single typed source of truth
```

## Editing content

All content lives in [`src/data/resume.ts`](src/data/resume.ts).
Update profile, skills, experience, projects, education there — components re-render automatically.

## Brand logos

Local SVG files in `public/brands/` (downloaded once, no CDN dependency at runtime).
Add a new brand by dropping its SVG into that folder and adding it to `brands` in `resume.ts`.

## Deploy

```bash
npm run build
# upload ./out/ to any static host:
#   - Cloudflare Pages
#   - Vercel
#   - Netlify
#   - GitHub Pages
#   - S3 + CloudFront
```

The legacy single-file site at the repo root (`../index.html`) is left untouched; deploy
whichever you prefer.
