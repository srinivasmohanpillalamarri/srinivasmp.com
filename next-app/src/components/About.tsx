import { Section } from './Section';
import { languages, education } from '@/data/resume';

export function About() {
  return (
    <Section
      id="about"
      num="01"
      name="About"
      title="Twenty years of production systems across four continents."
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_300px]">

        {/* Prose — left */}
        <div>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink-muted" data-reveal>
            <p>
              I&apos;m a Technical Project Manager and Full-Stack Architect with 20+ years
              building production AI platforms, ERPs, and mission-critical migrations. My focus
              is{' '}
              <strong className="font-semibold text-ink">
                getting working software in front of real users
              </strong>{' '}
              and sharpening from there.
            </p>
            <p>
              Lately I&apos;ve been wiring Anthropic Claude, Azure OpenAI, ChatGPT, and Oracle AI
              into customer-service apps, voice-driven CX surveys, and self-generative chatbot
              platforms. Earlier: a unified ERP across 23 verticals in Sudan, a 4 GB core banking
              migration with zero data loss, and a Microsoft WPF→Angular programme with 196+ engineers.
            </p>
            <p>
              Equally comfortable writing the first prototype, defining delivery cadence, or
              presenting to a Microsoft stakeholder. Open to senior IC, lead, and architect roles.
            </p>
          </div>

          {/* Quick stats */}
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4" data-reveal>
            {[
              { value: '20+',  label: 'Years' },
              { value: '9',    label: 'Companies' },
              { value: '4',    label: 'Countries' },
              { value: '196+', label: 'Engineers' },
            ].map((s) => (
              <div key={s.label} className="border border-rule bg-paper-tint p-4">
                <div className="text-3xl font-black leading-none text-ink">{s.value}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                  {s.label}
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Meta — right */}
        <aside className="flex flex-col gap-8" data-reveal>
          <dl className="divide-y divide-rule border border-rule">
            {[
              { label: 'Based',     value: 'Bangalore, IN' },
              { label: 'Experience', value: '20+ Years' },
              { label: 'Open to',   value: 'Senior IC · Lead · Architect' },
              { label: 'Languages', value: languages.join(' · ') },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-4 px-4 py-3"
              >
                <dt className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                  {item.label}
                </dt>
                <dd className="text-right text-sm text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
              Education
            </p>
            <ul className="space-y-2">
              {education.map((e) => (
                <li key={e.title} className="border border-rule bg-paper-tint px-4 py-3">
                  <div className="text-sm font-semibold text-ink">{e.title}</div>
                  <div className="mt-0.5 font-mono text-[10px] text-ink-soft">{e.subtitle}</div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </Section>
  );
}
