import { Section } from './Section';
import { BrandRow } from './BrandRow';
import { skillGroups } from '@/data/resume';

export function Stack() {
  return (
    <Section
      id="stack"
      num="04"
      name="Stack"
      title="The tools, languages, and platforms I rely on."
    >
      <div className="space-y-16">

        {/* Skill groups */}
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <li key={g.label} data-reveal>
              <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-accent">
                {g.label}
              </p>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item}><span className="skill-pill">{item}</span></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Brand logos */}
        <div className="border-t border-rule pt-14" data-reveal>
          <p className="mb-8 font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-accent">
            Platforms &amp; Brands
          </p>
          <BrandRow />
        </div>

      </div>
    </Section>
  );
}
