import { brands } from '@/data/resume';

/**
 * The brand SVGs are monochrome silhouettes with no `fill`, so they render
 * black by default — invisible on the dark theme. Loading them as a CSS mask
 * instead of an <img> lets the mark take a theme colour in both modes.
 */
export function BrandRow() {
  return (
    <ul
      aria-label="Platforms and tools"
      className="grid grid-cols-3 gap-x-8 gap-y-10 sm:grid-cols-5 lg:grid-cols-7"
    >
      {brands.map((b) => (
        <li key={b.file} className="flex flex-col items-center gap-3.5 text-center">
          <span
            aria-hidden
            className="brand-mark h-8 w-8"
            style={{ ['--brand' as string]: `url(/brands/${b.file})` }}
          />
          <span className="text-[12px] font-medium leading-tight text-txt-3">
            {b.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
