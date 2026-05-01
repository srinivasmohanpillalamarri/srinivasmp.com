import { Section } from './Section';
import { Icon } from './Icon';
import { projects } from '@/data/resume';

export function Projects() {
  return (
    <Section
      id="projects"
      num="03"
      name="Projects"
      title="Selected work I architected or led."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.title} data-reveal className={i % 2 === 1 ? 'sm:mt-8' : ''}>
            <div className="project-card flex h-full flex-col gap-4 p-6 md:p-8">

              <header>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-black tracking-tightish text-ink">{p.title}</h3>
                  {p.context && (
                    <span className="context-badge mt-0.5 shrink-0">{p.context}</span>
                  )}
                </div>
              </header>

              <p className="text-[0.95rem] leading-relaxed text-ink-muted">{p.blurb}</p>

              <ul className="space-y-2">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                    <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-rule pt-5">
                {p.stack.map((s) => (
                  <li key={s}><span className="skill-pill">{s}</span></li>
                ))}
              </ul>

            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
