import { profile } from '@/data/resume';

export function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
      <div className="mx-auto max-w-page px-6 py-14 md:px-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">

          <div>
            <p className="font-serif text-[1.4rem] font-medium text-txt">{profile.name}</p>
            <p className="mt-1.5 text-[0.9375rem] text-txt-3">
              VP Technical · AI Solutions Architect · Full-Stack Engineer
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.9375rem] font-medium text-txt-2 transition-colors hover:text-bronze"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.9375rem] font-medium text-txt-2 transition-colors hover:text-bronze"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-[0.9375rem] font-medium text-txt-2 transition-colors hover:text-bronze"
            >
              Email
            </a>
          </div>

        </div>

        <p className="mt-12 text-[0.875rem] text-txt-3">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
