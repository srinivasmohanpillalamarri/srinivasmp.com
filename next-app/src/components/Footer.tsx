import { profile } from '@/data/resume';

export function Footer() {
  return (
    <footer className="bg-paper-tint">
      <div className="mx-auto max-w-page px-6 py-10 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8">
          <div>
            <p className="text-sm font-bold text-ink">{profile.shortName}</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              Technical Project Manager · AI Solutions Architect · Full-Stack Engineer
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
            © {new Date().getFullYear()} · Crafted in {profile.location.split(',')[0]}
          </p>
        </div>
      </div>
    </footer>
  );
}
