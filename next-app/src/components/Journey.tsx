import { Section } from './Section';
import { journey } from '@/data/resume';

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Career Journey"
      heading="Career Journey: Infrastructure to Software Architect"
      subhead="Thirty years, one direction."
      intro="From racking servers and repairing hardware to leading AI transformation — each stage built on the implementation experience of the last."
      surface="raised"
    >
      <ol className="relative grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
        {/* Connecting rule — desktop only */}
        <div
          className="absolute left-0 right-0 top-[7px] hidden h-px lg:block"
          style={{ background: 'var(--line)' }}
          aria-hidden
        />

        {journey.map((s, i) => (
          <li key={s.stage} data-reveal className={`relative ${['', 'd1', 'd2', 'd3', 'd4', 'd4'][i] ?? ''}`}>
            {/* Indicator */}
            <span
              className="relative z-10 block h-[15px] w-[15px] rounded-full"
              style={{
                background: 'var(--accent)',
                border: '3px solid var(--surface-2)',
                boxShadow: '0 0 0 1px var(--accent-bd)',
              }}
              aria-hidden
            />

            <p className="mt-7 text-[13px] font-semibold uppercase tracking-[0.16em] text-bronze">
              {s.period}
            </p>
            <h3 className="mt-2.5 text-[1.3125rem] leading-snug text-txt">{s.stage}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-txt-2">{s.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
