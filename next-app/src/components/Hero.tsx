import Link from 'next/link';
import { Icon } from './Icon';
import { TypedText } from './TypedText';
import { profile } from '@/data/resume';

const stats = [
  { value: '20+',  label: 'Years' },
  { value: '9',    label: 'Companies' },
  { value: '4',    label: 'Countries' },
  { value: '196+', label: 'Engineers Led' },
];

const typedRoles = [
  'VP – Technical',
  'AI Solutions Architect',
  'Full-Stack Engineer',
  'Technical Project Manager',
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 20%, rgba(59,130,246,0.05) 0%, transparent 50%)',
        }}
      />

      <div className="mx-auto w-full max-w-page px-6 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20">

        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2.5 border border-rule bg-paper-tint px-4 py-2">
          <span className="dot-live" />
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
            Available for senior roles · Bangalore, India
          </span>
        </div>

        {/* Name */}
        <h1 className="leading-none tracking-tighter3">
          <span className="block text-[3.6rem] font-black text-ink sm:text-[5rem] md:text-[7rem] lg:text-[9rem]">
            {profile.shortName}
          </span>
        </h1>

        {/* Typed cycling role */}
        <p className="mt-4 text-[1.1rem] font-semibold text-accent sm:text-[1.4rem] md:text-[1.7rem]">
          <TypedText strings={typedRoles} />
        </p>

        {/* Blurb */}
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-[1.05rem]">
          {profile.blurb}
        </p>

        {/* Stats */}
        <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-rule pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="text-4xl font-black leading-none text-ink">{s.value}</dd>
              <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-accent-hi"
          >
            Get in Touch
            <Icon name="arrow-right" className="h-3.5 w-3.5" />
          </Link>
          <a
            href="#work"
            className="inline-flex items-center gap-2 border border-rule px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-muted transition-colors hover:border-ink hover:text-ink"
          >
            View Work
            <Icon name="arrow-right" className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 scroll-indicator">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-soft">Scroll</span>
        <div className="h-6 w-px bg-rule" />
      </div>

    </section>
  );
}
