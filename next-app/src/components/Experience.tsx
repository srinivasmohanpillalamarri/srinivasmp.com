import { Section } from './Section';
import { Icon } from './Icon';
import { experience } from '@/data/resume';

export function Experience() {
  return (
    <Section
      id="work"
      num="02"
      name="Work"
      title="Nine companies. Four countries. Twenty years."
    >
      {/* Section intro */}
      <div className="mb-12 grid gap-4 border-b border-rule pb-12 sm:grid-cols-3" data-reveal>
        {[
          { value: '9',    label: 'Companies',        sub: 'Across BFSI, Retail, Logistics, ERP' },
          { value: '4',    label: 'Countries',         sub: 'India · Sudan · Tanzania · Congo' },
          { value: '20+',  label: 'Years Active',      sub: '2006 to present' },
        ].map((s) => (
          <div key={s.label} className="border border-rule bg-paper-tint p-5">
            <div className="text-4xl font-black leading-none text-ink">{s.value}</div>
            <div className="mt-2 text-sm font-semibold text-ink">{s.label}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <ol className="space-y-0">
        {experience.map((r, i) => (
          <li
            key={`${r.company}-${r.period}`}
            className="border-b border-rule py-10 last:border-0"
            data-reveal
          >
            <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">

              {/* Left: period + location */}
              <div className="flex flex-row items-start gap-4 md:flex-col md:gap-2 md:pt-1">
                <div>
                  <div className="inline-flex items-center gap-2 border border-accent bg-accent-dim px-2.5 py-1">
                    {i === 0 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    )}
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                      {r.period}
                    </span>
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                    <Icon name="pin" className="h-3 w-3 shrink-0" />
                    {r.location}
                  </p>
                </div>
              </div>

              {/* Right: content */}
              <div className="timeline-item">
                {/* Company + role header */}
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-black tracking-tightish text-ink">{r.role}</h3>
                    <p className="mt-0.5 text-base font-semibold text-accent-hi">{r.company}</p>
                  </div>
                </div>

                {r.summary && (
                  <p className="mb-4 max-w-prose rounded border-l-2 border-accent pl-4 text-[0.97rem] italic leading-relaxed text-ink-muted">
                    {r.summary}
                  </p>
                )}

                <ul className="space-y-2">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[0.94rem] leading-relaxed text-ink-muted">
                      <Icon name="check" className="mt-1.5 h-3 w-3 shrink-0 text-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {r.stack && (
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {r.stack.map((t) => (
                      <li key={t}><span className="skill-pill">{t}</span></li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
