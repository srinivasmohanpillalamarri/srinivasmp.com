import { Section } from './Section';
import { projects } from '@/data/resume';
import { ProjectVisual } from './ProjectVisual';

export function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Featured Projects"
      heading="Enterprise Platform and Migration Case Studies"
      subhead="Platforms built, migrations survived."
      intro="A selection of programmes where the architecture decision and the delivery outcome were the same problem."
    >
      <div className="space-y-24 md:space-y-32">
        {projects.map((p, i) => {
          const flipped = i % 2 === 1;
          return (
            <article
              key={p.title}
              data-reveal
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <div className={flipped ? 'lg:order-2' : ''}>
                <ProjectVisual motif={p.visual} />
              </div>

              <div className={flipped ? 'lg:order-1' : ''}>
                {p.context && <p className="eyebrow">{p.context}</p>}

                <h3
                  className="mt-4 text-txt"
                  style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)' }}
                >
                  {p.title}
                </h3>

                <p className="mt-5 text-[1.0625rem] leading-[1.85] text-txt-2">{p.blurb}</p>

                <ul className="mt-8 space-y-3.5">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex gap-3.5 text-[0.9875rem] leading-relaxed text-txt-2">
                      <span
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: 'var(--accent)' }}
                      />
                      {o}
                    </li>
                  ))}
                </ul>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-btn px-3 py-1.5 text-[13px] font-medium text-txt-3"
                      style={{ border: '1px solid var(--line)', background: 'var(--surface)' }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
