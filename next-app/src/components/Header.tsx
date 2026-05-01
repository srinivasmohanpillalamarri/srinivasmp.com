'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Icon } from './Icon';
import { profile } from '@/data/resume';

const NAV = [
  { id: 'about',    label: 'About' },
  { id: 'work',     label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack',    label: 'Stack' },
  { id: 'contact',  label: 'Contact' },
];

export function Header() {
  const [theme,   setTheme]   = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initial: 'light' | 'dark' = stored ?? 'dark';
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
    setMounted(true);

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    setTheme(next);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-rule header-opaque' : 'bg-transparent border-transparent border-b'
      }`}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-5 md:px-8">

        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="text-sm font-bold tracking-tightish text-ink transition-colors group-hover:text-accent">
            {profile.shortName}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft md:inline">
            VP – Technical · AI Solutions Architect · FSE
          </span>
        </Link>

        {/* Nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center border border-rule text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            {mounted && <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-4 w-4" />}
          </button>
          <a
            href={profile.resumePdf}
            download
            className="inline-flex items-center gap-2 bg-accent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-accent-hi"
          >
            <Icon name="download" className="h-3.5 w-3.5" />
            Résumé
          </a>
        </div>

      </div>
    </header>
  );
}
