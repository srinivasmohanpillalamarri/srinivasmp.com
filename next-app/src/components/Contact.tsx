import { Section } from './Section';
import { Icon } from './Icon';
import { profile } from '@/data/resume';

const links = [
  {
    icon:     'mail'     as const,
    label:    'Email',
    value:    profile.email,
    href:     `mailto:${profile.email}`,
  },
  {
    icon:     'phone'    as const,
    label:    'Phone',
    value:    profile.phone,
    href:     `tel:${profile.phone.replace(/\s+/g, '')}`,
  },
  {
    icon:     'linkedin' as const,
    label:    'LinkedIn',
    value:    'in/mpsrinivas',
    href:     profile.links.linkedin,
    external: true,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      num="05"
      name="Contact"
      title="Open to senior IC, lead, and architect roles."
    >
      <div className="space-y-10">

        <p className="max-w-prose text-lg leading-relaxed text-ink-muted" data-reveal>
          Particularly interested in roles involving Anthropic Claude, Azure OpenAI, or large-scale
          modernisation programmes. Based in Bangalore — comfortable across global time zones.
        </p>

        <ul className="grid gap-4 sm:grid-cols-3" data-reveal>
          {links.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 border border-rule bg-paper-tint p-6 transition-all hover:border-accent"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-rule text-ink-soft transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                    {c.label}
                  </span>
                  <span className="mt-1 block break-all text-sm font-semibold text-ink">
                    {c.value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </Section>
  );
}
