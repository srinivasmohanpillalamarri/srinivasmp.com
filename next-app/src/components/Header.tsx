'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Icon } from './Icon';
import { profile } from '@/data/resume';

const NAV = [
  { id: 'about',     label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'work',      label: 'Projects' },
  { id: 'journey',   label: 'Journey' },
  { id: 'contact',   label: 'Contact' },
];

/* The <html data-theme> attribute is the single source of truth — the inline
   script in <head> sets it before paint. Subscribing to it beats mirroring it
   into state inside an effect, which triggers a cascading render. */
function subscribeTheme(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => mo.disconnect();
}
const getTheme = (): 'light' | 'dark' =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
const getServerTheme = (): 'light' | 'dark' => 'dark';

export function Header() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('');

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 32);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const visible = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting);
        setActive([...NAV].reverse().find(n => visible.get(n.id))?.id ?? '');
      },
      { rootMargin: '-88px 0px -72% 0px', threshold: 0 }
    );
    for (const n of NAV) {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    // The MutationObserver above picks this up and re-renders — no setState here.
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
  };

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--bg) 88%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      }}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-5 md:px-12">

        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-serif text-[1.4rem] font-medium text-txt transition-colors group-hover:text-bronze">
            {profile.shortName}
          </span>
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-txt-3 lg:block">
            VP Technical
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map(n => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="relative text-[15px] font-medium transition-colors duration-300"
              style={{ color: active === n.id ? 'var(--accent)' : 'var(--txt-2)' }}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-btn text-txt-2 transition-colors hover:text-bronze"
            style={{ border: '1px solid var(--line)', background: 'var(--surface)' }}
          >
            <Icon name={theme === 'light' ? 'moon' : 'sun'} className="h-[18px] w-[18px]" />
          </button>
          <a
            href={profile.resumePdf}
            download
            className="hidden items-center rounded-btn px-6 py-2.5 text-[14px] font-semibold transition-colors sm:inline-flex"
            style={{ background: 'var(--accent-btn)', color: 'var(--on-accent)' }}
          >
            Résumé
          </a>
        </div>

      </div>
    </header>
  );
}
