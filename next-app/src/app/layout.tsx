import type { Metadata, Viewport } from 'next';
import { Manrope, Fraunces } from 'next/font/google';
import './globals.css';
import { profile } from '@/data/resume';
import { allSchemas } from '@/data/schema';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

/**
 * Fraunces replaces DM Serif Display, whose Didone-style hairlines broke up at
 * heading sizes — worst on the dark theme and at the ~21px wordmark. Fraunces
 * carries far less stroke contrast and has a real weight range, and the `opsz`
 * axis lets the browser thicken strokes automatically as text gets smaller.
 */
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['opsz']
});

const SITE = 'https://srinivasmp.com';

export const metadata: Metadata = {
  // ≤60 chars so it is not truncated, and it carries "Software Architect" —
  // a target term that previously appeared nowhere on the site.
  title: `${profile.name} — Software Architect`,
  description: profile.metaDescription,
  authors: [{ name: profile.name }],
  metadataBase: new URL(SITE),
  alternates: { canonical: '/' },
  keywords: [
    'Software Architect', 'Enterprise Architect', 'VP Technical',
    'AI Solutions Architect', 'Full Stack Architect',
    'Anthropic Claude', 'Azure OpenAI', 'Angular', '.NET', 'Mumbai'
  ],
  // Real .png paths rather than Next's extensionless /opengraph-image route:
  // static hosts infer MIME from the extension, and crawlers reject
  // application/octet-stream. See scripts/image-generators/ to regenerate.
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png'
  },
  openGraph: {
    title: `${profile.name} — Software Architect · VP Technical`,
    description: profile.metaDescription,
    url: SITE,
    siteName: profile.shortName,
    locale: 'en_US',
    type: 'profile',
    images: [{
      url: '/og.png',
      width: 1200,
      height: 630,
      alt: `${profile.name} — VP Technical · AI Solutions Architect`
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — Software Architect · VP Technical`,
    description: profile.metaDescription,
    images: ['/og.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' }
  }
};

/**
 * Runs before first paint so the theme is settled before anything renders.
 * Dark is the default; only an explicit stored choice overrides it.
 */
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.dataset.theme=t;}catch(e){}})();`;

/** Matches the dark default, so mobile browser chrome does not flash cream. */
export const viewport: Viewport = {
  themeColor: '#1e1a15',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {allSchemas.map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
