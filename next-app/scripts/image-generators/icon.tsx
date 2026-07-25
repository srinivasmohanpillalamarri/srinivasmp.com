import { ImageResponse } from 'next/og';

// Required so the image is rendered once at build time under `output: 'export'`.
export const dynamic = 'force-static';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** See opengraph-image.tsx — satori needs real font data for the serif. */
async function loadFont(family: string, weight: number): Promise<ArrayBuffer> {
  const q = family.replace(/ /g, '+');
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${q}:wght@${weight}`,
    { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1)' } }
  ).then((r) => r.text());

  const url = css.match(/src:\s*url\((.+?)\)/)?.[1];
  if (!url) throw new Error(`Could not find ${family} ${weight} in Google CSS response`);
  return fetch(url).then((r) => r.arrayBuffer());
}

/** Bronze field, cream serif monogram — the site's palette at favicon scale. */
export default async function Icon() {
  const serif = await loadFont('Fraunces', 500);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#c49a6c',
          color: '#fffdf8',
          fontSize: 122,
          fontFamily: 'Fraunces',
        }}
      >
        S
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Fraunces', data: serif, weight: 500, style: 'normal' }],
    }
  );
}
