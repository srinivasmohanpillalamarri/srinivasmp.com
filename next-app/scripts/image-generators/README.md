# Image generators

Source for `public/og.png` (1200×630 social card) and `public/icon.png` (180×180 favicon).

These are **not** in `src/app/` on purpose. Next's `opengraph-image`/`icon` file
conventions emit *extensionless* files (`out/opengraph-image`), which static hosts
serve as `application/octet-stream` — and LinkedIn, Twitter, and Facebook reject
that content type, so the link preview silently breaks.

Instead the PNGs are committed to `public/` and referenced explicitly from
`src/app/layout.tsx`.

## Regenerating after a design change

1. Copy both files back into `src/app/`:
   ```bash
   cp scripts/image-generators/*.tsx src/app/
   ```
2. `npm run build`
3. Copy the output into `public/` with real extensions:
   ```bash
   cp out/opengraph-image public/og.png && cp out/icon public/icon.png
   ```
4. Move the generators back out so they stop emitting extensionless routes:
   ```bash
   mv src/app/opengraph-image.tsx src/app/icon.tsx scripts/image-generators/
   ```
5. `npm run build` again and confirm `out/index.html` has exactly one
   `og:image`, pointing at `/og.png`.
