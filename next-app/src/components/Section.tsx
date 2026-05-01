import { ReactNode } from 'react';

type Props = {
  id: string;
  num: string;
  name: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, num, name, title, children }: Props) {
  return (
    <section id={id} className="border-b border-rule">
      <div className="mx-auto max-w-page px-6 py-24 md:px-8 md:py-28">

        {/* Section header */}
        <header className="mb-14" data-reveal>
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
              /{num}
            </span>
            <div className="h-px flex-1 bg-rule" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft">
              {name}
            </span>
          </div>
          <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tightish text-ink sm:text-4xl">
            {title}
          </h2>
        </header>

        {children}
      </div>
    </section>
  );
}
