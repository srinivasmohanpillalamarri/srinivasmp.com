import { ImageResponse } from 'next/og';
import { profile, metrics } from '@/data/resume';

// Required so the image is rendered once at build time under `output: 'export'`.
export const dynamic = 'force-static';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${profile.name} — VP Technical · AI Solutions Architect`;

const BG     = '#f8f4e8';
const SURF   = '#fffdf8';
const TXT    = '#2f2a24';
const TXT_2  = '#6b6358';
const TXT_3  = '#776e61';
const BRONZE = '#c49a6c';  /* decorative only — 2.33:1 as text on cream */
const BRONZE_TEXT = '#8f6229';  /* 4.84:1 on cream */
const LINE   = '#e8e0d4';

/**
 * satori (behind ImageResponse) has no bundled webfonts, so the serif and the
 * heavier sans weights must be handed over as real font data. Google's CSS API
 * serves TTF instead of woff2 when the UA looks old — the format satori needs.
 */
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

export default async function OpengraphImage() {
  const [serif, sans, sansBold] = await Promise.all([
    loadFont('Fraunces', 500),
    loadFont('Manrope', 500),
    loadFont('Manrope', 700),
  ]);

  const shown = metrics.slice(0, 4);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: BG,
          color: TXT,
          padding: '76px 84px',
          justifyContent: 'space-between',
          fontFamily: 'Manrope',
        }}
      >
        {/* Bronze rule across the top */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: 8,
            background: BRONZE,
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: BRONZE_TEXT,
              marginBottom: 30,
            }}
          >
            MUMBAI, INDIA · OPEN TO SENIOR ROLES
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'Fraunces',
              fontSize: 78,
              lineHeight: 1.08,
              letterSpacing: '-0.015em',
              color: TXT,
            }}
          >
            <div style={{ display: 'flex' }}>Srinivas Mohan</div>
            <div style={{ display: 'flex' }}>Pillalamarri</div>
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 30,
              paddingTop: 26,
              borderTop: `1px solid ${LINE}`,
              fontSize: 27,
              fontWeight: 500,
              color: TXT_2,
            }}
          >
            VP Technical · AI Solutions Architect · Full-Stack Engineer
          </div>
        </div>

        {/* Metric row */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'stretch' }}>
          {shown.map((m) => (
            <div
              key={m.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                background: SURF,
                border: `1px solid ${LINE}`,
                borderRadius: 20,
                padding: '22px 24px',
              }}
            >
              {/* Fraunces' "+" glyph renders as a broken dash through satori's
                  TTF path, so the numeral is set in Fraunces and any suffix in
                  Manrope. Browsers render the woff2 correctly — this is only a
                  build-time image concern. */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  color: TXT,
                  lineHeight: 1,
                }}
              >
                <div style={{ display: 'flex', fontFamily: 'Fraunces', fontSize: 42 }}>
                  {m.value.replace(/[^\d.]/g, '')}
                </div>
                {/[^\d.]/.test(m.value) && (
                  <div
                    style={{
                      display: 'flex',
                      fontFamily: 'Manrope',
                      fontWeight: 500,
                      fontSize: 34,
                      marginLeft: 1,
                    }}
                  >
                    {m.value.replace(/[\d.]/g, '')}
                  </div>
                )}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 15,
                  fontWeight: 700,
                  color: TXT_3,
                  marginTop: 12,
                  letterSpacing: '0.04em',
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Fraunces', data: serif, weight: 500, style: 'normal' },
        { name: 'Manrope',          data: sans,     weight: 500, style: 'normal' },
        { name: 'Manrope',          data: sansBold, weight: 700, style: 'normal' },
      ],
    }
  );
}
