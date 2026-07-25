import Image from 'next/image';
import Link from 'next/link';
import { profile } from '@/data/resume';

/**
 * Swap `public/avatar.png` for a square photo of at least 640×640 — the
 * current file is 128×111, which upscales softly at this display size.
 */
const PORTRAIT = '/avatar.png';

export function Hero() {
  return (
    <section className="relative" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-page px-6 md:px-12">
        <div className="flex min-h-[92vh] flex-col justify-center gap-14 py-36 lg:flex-row lg:items-center lg:gap-24">

          {/* ── Portrait ── */}
          <div className="flex shrink-0 justify-center lg:justify-start" data-reveal>
            <div
              className="relative overflow-hidden rounded-full"
              style={{
                width:  'clamp(190px, 23vw, 280px)',
                height: 'clamp(190px, 23vw, 280px)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--line)',
                background: 'var(--surface)',
              }}
            >
              <Image
                src={PORTRAIT}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="280px"
                className="object-cover"
              />
            </div>
          </div>

          {/* ── Name and statement ── */}
          <div className="flex-1">
            <p className="eyebrow" data-reveal>
              {profile.location} · Open to senior roles
            </p>

            <h1
              className="mt-6 text-txt"
              data-reveal
              style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', lineHeight: 1.06 }}
            >
              Srinivas Mohan<br />Pillalamarri
            </h1>

            <p
              className="mt-7 text-[1.0625rem] font-medium text-txt-2 md:text-[1.1875rem]"
              data-reveal
            >
              Software Architect <span className="text-bronze">•</span> VP Technical{' '}
              <span className="text-bronze">•</span> AI Solutions Architect
            </p>

            <p
              className="mt-8 text-[1.0625rem] leading-[1.85] text-txt-2 md:text-[1.1875rem]"
              data-reveal
              style={{ maxWidth: '56ch' }}
            >
              Full stack architect and technical project manager building enterprise
              AI platforms, scalable digital ecosystems, and high-performing
              engineering organizations that deliver measurable business outcomes.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-4" data-reveal>
              <Link
                href="#work"
                className="inline-flex items-center gap-2.5 rounded-btn px-8 py-4 text-[15px] font-semibold transition-colors duration-300"
                style={{ background: 'var(--accent-btn)', color: 'var(--on-accent)', boxShadow: 'var(--shadow)' }}
              >
                View Projects
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-btn px-8 py-4 text-[15px] font-semibold text-txt transition-colors duration-300 hover:text-bronze"
                style={{ border: '1px solid var(--line)', background: 'var(--surface)' }}
              >
                Contact
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
