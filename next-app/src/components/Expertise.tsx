import { Section } from './Section';
import { expertise } from '@/data/resume';
import { BrandRow } from './BrandRow';

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Expertise"
      heading="Enterprise Architecture, AI and Full Stack Expertise"
      subhead="Where strategy and implementation meet."
      intro="Six capabilities that compound — architecture decisions informed by having shipped them, and leadership grounded in the same."
      surface="raised"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {expertise.map((x, i) => (
          <article
            key={x.title}
            data-reveal
            className={`lift group relative overflow-hidden rounded-card p-9 ${['d1','d2','d3','d1','d2','d3'][i]}`}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {/* Bronze accent line */}
            <span
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{ background: 'var(--accent)' }}
            />

            <h3 className="text-[1.4375rem] text-txt">{x.title}</h3>
            <p className="mt-4 text-[0.9875rem] leading-[1.8] text-txt-2">{x.blurb}</p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {x.items.map((item) => (
                <li
                  key={item}
                  className="rounded-btn px-3 py-1.5 text-[13px] font-medium text-txt-2"
                  style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-bd)' }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Platforms and tools */}
      <div className="mt-24" data-reveal>
        <p className="eyebrow mb-10 text-center">Platforms &amp; Tools</p>
        <BrandRow />
      </div>
    </Section>
  );
}
