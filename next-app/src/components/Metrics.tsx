import { metrics } from '@/data/resume';

export function Metrics() {
  return (
    <section style={{ background: 'var(--surface-2)', borderBlock: '1px solid var(--line)' }}>
      <div className="mx-auto max-w-page px-6 py-24 md:px-12 md:py-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              data-reveal
              className={`lift rounded-card p-8 ${['d1','d2','d3','d1','d2','d3'][i]}`}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                className="font-serif font-medium text-txt"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 3.25rem)', lineHeight: 1 }}
              >
                {m.value}
              </div>
              <div
                className="mt-5 h-px w-10"
                style={{ background: 'var(--accent)' }}
              />
              <p className="mt-5 text-[1.0625rem] font-semibold text-txt">{m.label}</p>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-txt-3">{m.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
