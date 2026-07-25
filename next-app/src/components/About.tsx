import { Section } from './Section';
import { languages, education, profile } from '@/data/resume';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      heading="Software Architecture and Engineering Leadership"
      subhead="Leadership meets engineering excellence."
    >
      <div className="grid gap-16 lg:grid-cols-[1.35fr_1fr] lg:gap-24">

        {/* ── Narrative ── */}
        <div
          className="space-y-7 text-[1.0625rem] leading-[1.9] text-txt-2 md:text-[1.1875rem]"
          data-reveal
        >
          <p>
            I lead technology organizations through the work that decides whether a
            transformation programme succeeds: the architecture, the delivery cadence,
            and the people. Thirty years in, my focus is unchanged —{' '}
            <strong className="font-semibold text-txt">
              getting working software in front of real users
            </strong>
            , then iterating until it is excellent.
          </p>
          <p>
            Today that means production AI: customer-service automation on Anthropic
            Claude, a self-generative chatbot platform that cut build time from weeks
            to minutes, and a multilingual voice-driven CX survey tool. Earlier it
            meant a unified ERP spanning 23 business verticals, a four-gigabyte core
            banking migration completed with zero data loss, and a Microsoft platform
            migration coordinated across 196 engineers.
          </p>
          <p>
            I am equally comfortable writing the first prototype, defining the delivery
            model, or presenting architecture to an executive stakeholder. That range is
            deliberate — strategy that has never survived an implementation tends not to
            survive the next one either.
          </p>

          {/* Personal note — deliberately general about the family's work.
              No specific inventions are claimed. */}
          <p
            className="mt-2 pt-8"
            style={{ borderTop: '1px solid var(--line)' }}
          >
            Technology is, in my case, inherited. My family&apos;s roots are in the
            textile industry — weaving, and the machinery behind it — where successive
            generations built on and improved the equipment they worked with. It is a
            fitting lineage: the programmable loom is the ancestor of the punched card,
            and the punched card of the computer. Today nearly every member of the
            family works in technology in one form or another. The material changed;
            the instinct to take the machine apart and make it better did not.
          </p>
        </div>

        {/* ── Profile detail ── */}
        <aside className="flex flex-col gap-6" data-reveal>
          <div
            className="rounded-card p-8"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <p className="eyebrow">Profile</p>
            <dl className="mt-7 space-y-5">
              {[
                { k: 'Based',      v: profile.location },
                { k: 'Experience', v: '30 years · 20+ in software' },
                { k: 'Open to',    v: 'Senior IC · Lead · Architect' },
                { k: 'Languages',  v: languages.join(', ') },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline justify-between gap-6">
                  <dt className="shrink-0 text-[13px] font-semibold uppercase tracking-[0.14em] text-txt-3">
                    {row.k}
                  </dt>
                  <dd className="text-right text-[0.9375rem] leading-snug text-txt">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="rounded-card p-8"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <p className="eyebrow">Education</p>
            <ul className="mt-7 space-y-5">
              {education.map((e) => (
                <li key={e.title}>
                  <p className="text-[0.9375rem] font-semibold text-txt">{e.title}</p>
                  <p className="mt-1 text-[0.875rem] text-txt-3">{e.subtitle}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </Section>
  );
}
