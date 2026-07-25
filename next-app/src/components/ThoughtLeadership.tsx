import { Section } from './Section';
import { articles } from '@/data/resume';

export function ThoughtLeadership() {
  const anyPlaceholder = articles.some(a => a.placeholder);

  return (
    <Section
      id="insights"
      eyebrow="Thought Leadership"
      heading="Writing on AI, architecture, and delivery"
      intro="Notes from three decades of shipping enterprise systems — and lately, of putting language models into production."
    >
      {anyPlaceholder && (
        <p
          className="mb-10 rounded-el px-6 py-4 text-[0.9375rem] leading-relaxed"
          style={{
            background: 'var(--accent-bg)',
            border: '1px dashed var(--accent-bd)',
            color: 'var(--txt-2)',
          }}
        >
          <strong className="font-semibold text-txt">Placeholder section.</strong>{' '}
          Replace the <code>articles</code> array in{' '}
          <code>src/data/resume.ts</code> with real published pieces, or remove{' '}
          <code>&lt;ThoughtLeadership /&gt;</code> from <code>page.tsx</code>.
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a, i) => {
          const Card = a.href ? 'a' : 'div';
          return (
            <Card
              key={`${a.topic}-${i}`}
              {...(a.href ? { href: a.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
              data-reveal
              className={`lift group flex flex-col rounded-card p-8 ${['d1','d2','d3','d1','d2','d3'][i]}`}
              style={{
                background: 'var(--surface)',
                border: a.placeholder ? '1px dashed var(--line)' : '1px solid var(--line)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <p className="eyebrow">{a.topic}</p>

              <h3 className="mt-5 text-[1.3125rem] leading-snug text-txt">
                {a.title}
              </h3>

              <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-txt-2">
                {a.excerpt}
              </p>

              <span
                className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold"
                style={{ color: a.placeholder ? 'var(--txt-3)' : 'var(--accent)' }}
              >
                {a.placeholder ? 'Not yet published' : 'Read more'}
                {!a.placeholder && (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
