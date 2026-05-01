import Image from 'next/image';
import { brands } from '@/data/resume';

export function BrandRow() {
  return (
    <ul
      aria-label="Tools and platforms"
      className="grid grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-5 md:grid-cols-7"
    >
      {brands.map((b) => (
        <li
          key={b.file}
          className="flex flex-col items-center gap-3"
          title={b.name}
        >
          <span className="brand-mark relative h-7 w-7">
            <Image
              src={`/brands/${b.file}`}
              alt={`${b.name} logo`}
              fill
              sizes="28px"
              className="object-contain"
            />
          </span>
          <span className="text-[11px] uppercase tracking-[0.12em] text-ink-soft">
            {b.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
