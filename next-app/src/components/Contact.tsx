import { profile } from '@/data/resume';

const CHANNELS = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    note: 'Best for detailed briefs',
  },
  {
    label: 'LinkedIn',
    value: 'in/mpsrinivas',
    href: profile.links.linkedin,
    note: 'Connect and message',
    external: true,
  },
  {
    label: 'Schedule a discussion',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    note: 'Comfortable across time zones',
  },
];

export function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-page px-6 py-[96px] md:px-12 md:py-section">

        <div className="mx-auto mb-16 text-center md:mb-20" style={{ maxWidth: '720px' }} data-reveal>
          <p className="eyebrow">Contact</p>
          <h2
            className="mt-5 text-txt"
            style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.25rem)' }}
          >
            Let&apos;s Build the Future Together
          </h2>
          <p className="mx-auto mt-6 text-[1.0625rem] leading-[1.8] text-txt-2 md:text-[1.125rem]">
            Open to senior IC, lead, and architect roles — particularly enterprise AI,
            platform modernisation, and engineering leadership. Based in{' '}
            {profile.location.replace(', India', '')}, comfortable across global time zones.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {CHANNELS.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              data-reveal
              className={`lift group flex flex-col rounded-card p-8 ${['d1','d2','d3'][i]}`}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <p className="eyebrow">{c.label}</p>
              <p
                className="mt-5 text-[1.0625rem] font-semibold text-txt transition-colors group-hover:text-bronze"
                style={{ wordBreak: 'break-word' }}
              >
                {c.value}
              </p>
              <p className="mt-2 text-[0.9375rem] text-txt-3">{c.note}</p>
            </a>
          ))}
        </div>

        <div className="mt-14 text-center" data-reveal>
          <a
            href={profile.resumePdf}
            download
            className="inline-flex items-center gap-2.5 rounded-btn px-8 py-4 text-[15px] font-semibold transition-colors"
            style={{ background: 'var(--accent-btn)', color: 'var(--on-accent)', boxShadow: 'var(--shadow)' }}
          >
            Download Résumé
          </a>
        </div>

      </div>
    </section>
  );
}
