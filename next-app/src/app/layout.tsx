import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { profile } from '@/data/resume';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: `${profile.name} — TPM · AI Solutions Architect · Full-Stack Engineer`,
  description: profile.blurb,
  authors: [{ name: profile.name }],
  metadataBase: new URL('https://srinivasmp.com'),
  openGraph: {
    title: `${profile.name} — TPM · AI Solutions Architect`,
    description: profile.blurb,
    url: 'https://srinivasmp.com',
    siteName: profile.shortName,
    type: 'profile'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — TPM · AI Solutions Architect`,
    description: profile.blurb
  },
  icons: {}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-theme="dark">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
