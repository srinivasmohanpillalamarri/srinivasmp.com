import { ReactNode } from 'react';

type Props = {
  id: string;
  eyebrow: string;
  /** Plain, descriptive phrase — this is what search and AI crawlers read. */
  heading: string;
  /** The editorial line. Set larger than the intro, it still reads as the
   *  headline to a human while the H2 above carries the machine signal. */
  subhead?: string;
  intro?: string;
  children: ReactNode;
  surface?: 'base' | 'raised';
  align?: 'left' | 'center';
};

export function Section({
  id,
  eyebrow,
  heading,
  subhead,
  intro,
  children,
  surface = 'base',
  align = 'left',
}: Props) {
  const centered = align === 'center';

  return (
    <section
      id={id}
      style={{ background: surface === 'raised' ? 'var(--surface-2)' : 'var(--bg)' }}
    >
      <div className="mx-auto max-w-page px-6 py-[96px] md:px-12 md:py-section">

        <header
          className={`mb-16 md:mb-20 ${centered ? 'mx-auto text-center' : ''}`}
          style={{ maxWidth: centered ? '760px' : undefined }}
          data-reveal
        >
          <p className="eyebrow">{eyebrow}</p>
          <h2
            className="mt-5 text-txt"
            style={{
              fontSize: 'clamp(2.25rem, 4vw, 3rem)',
              maxWidth: centered ? undefined : '840px',
            }}
          >
            {heading}
          </h2>
          {subhead && (
            <p
              className={`mt-4 font-serif font-medium text-txt-2 ${centered ? 'mx-auto' : ''}`}
              style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', maxWidth: '46ch' }}
            >
              {subhead}
            </p>
          )}
          {intro && (
            <p
              className={`mt-6 text-[1.0625rem] leading-[1.8] text-txt-2 md:text-[1.125rem] ${centered ? 'mx-auto' : ''}`}
              style={{ maxWidth: '62ch' }}
            >
              {intro}
            </p>
          )}
        </header>

        {children}
      </div>
    </section>
  );
}
