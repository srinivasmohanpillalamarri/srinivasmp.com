import { Section } from './Section';
import { experience } from '@/data/resume';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      heading="Software Architect and Technical Manager Experience"
      subhead="Nine companies. Four countries."
      intro="The full record behind the arc above — roles, mandates, and what actually shipped."
    >
      <div>
        {experience.map((r, i) => (
          <article
            key={`${r.company}-${r.period}`}
            data-reveal
            className="grid gap-6 py-12 md:grid-cols-[220px_1fr] md:gap-14"
            style={{ borderTop: i === 0 ? 'none' : '1px solid var(--line)' }}
          >
            {/* Left rail: period + location */}
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-bronze">
                {r.period}
              </p>
              <p className="mt-2 text-[0.9375rem] text-txt-3">{r.location}</p>
            </div>

            {/* Right: role detail */}
            <div>
              <h3 className="text-[1.5rem] leading-snug text-txt">{r.role}</h3>
              <p className="mt-1.5 text-[1.0625rem] font-semibold text-txt-2">{r.company}</p>

              {r.summary && (
                <p
                  className="mt-6 text-[1rem] leading-[1.8] text-txt-2"
                  style={{ borderLeft: '2px solid var(--accent-bd)', paddingLeft: '1.25rem' }}
                >
                  {r.summary}
                </p>
              )}

              <ul className="mt-6 space-y-3">
                {r.highlights.map((h) => (
                  <li key={h} className="flex gap-3.5 text-[0.9875rem] leading-relaxed text-txt-2">
                    <span
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: 'var(--accent)' }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {r.stack && (
                <ul className="mt-7 flex flex-wrap gap-2">
                  {r.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-btn px-3 py-1.5 text-[13px] font-medium text-txt-3"
                      style={{ border: '1px solid var(--line)', background: 'var(--surface)' }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
