# srinivasmp.com

Personal site / resume for **Srinivas M. P.** — Technical Project Manager · AI Solutions Architect · Full-Stack Engineer.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Statically exported.

## Develop

```bash
cd next-app
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to ./next-app/out
npm run type-check
```

## Layout

```
.
├── next-app/                # the site
│   ├── src/data/resume.ts   # single source of truth (edit content here)
│   ├── src/components/      # 7 small components
│   └── public/              # avatar + local brand SVGs
├── assets/docs/             # source resume document
└── README.md
```

Deploy `next-app/out/` to any static host (Cloudflare Pages, Vercel, S3, GitHub Pages).
