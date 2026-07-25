import { testimonials, profile } from '@/data/resume';

/**
 * Renders real quotes when `testimonials` holds any (placeholder !== true).
 *
 * Until then it falls back to pointing at the LinkedIn recommendations rather
 * than showing invented text — recommendations are attributed to real people,
 * so the wording has to come from them verbatim, not be paraphrased.
 */
export function Testimonials() {
  const real = testimonials.filter(t => !t.placeholder);

  return (
    <section
      id="testimonials"
      style={{ background: 'var(--surface-2)', borderBlock: '1px solid var(--line)' }}
    >
      <div className="mx-auto max-w-page px-6 py-[96px] md:px-12 md:py-section">
        <div className="mx-auto" style={{ maxWidth: '860px' }}>

          {real.length > 0 ? (
            real.map((t, i) => (
              <figure key={i} className={i > 0 ? 'mt-20 text-center' : 'text-center'} data-reveal>
                <span
                  className="block font-serif leading-none"
                  style={{ fontSize: '5.5rem', color: 'var(--accent)', opacity: 0.35 }}
                  aria-hidden
                >
                  &ldquo;
                </span>

                <blockquote
                  className="mt-2 font-serif font-medium text-txt"
                  style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', lineHeight: 1.45 }}
                >
                  {t.quote}
                </blockquote>

                <figcaption className="mt-10">
                  <div className="mx-auto mb-7 h-px w-14" style={{ background: 'var(--accent)' }} />
                  <p className="text-[1.0625rem] font-semibold text-txt">{t.name}</p>
                  <p className="mt-1 text-[0.9375rem] text-txt-3">{t.role}</p>
                </figcaption>
              </figure>
            ))
          ) : (
            <div className="text-center" data-reveal>
              <p className="eyebrow">Recommendations</p>
              <h2
                className="mx-auto mt-5 text-txt"
                style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', maxWidth: '20ch' }}
              >
                Colleagues have said it better than I would
              </h2>
              <p
                className="mx-auto mt-6 text-[1.0625rem] leading-[1.8] text-txt-2"
                style={{ maxWidth: '52ch' }}
              >
                Written recommendations from engineers, project managers, and
                stakeholders I&apos;ve worked with across nine companies.
              </p>
              <a
                href={`${profile.links.linkedin}/details/recommendations/`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2.5 rounded-btn px-8 py-4 text-[15px] font-semibold transition-colors"
                style={{
                  background: 'var(--accent-btn)',
                  color: 'var(--on-accent)',
                  boxShadow: 'var(--shadow)',
                }}
              >
                Read them on LinkedIn
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M7 17 17 7M8 7h9v9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
