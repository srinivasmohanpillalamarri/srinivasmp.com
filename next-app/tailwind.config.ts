import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:      { DEFAULT: 'var(--bg)', surface: 'var(--surface)', 2: 'var(--surface-2)' },
        txt:     { DEFAULT: 'var(--txt)', 2: 'var(--txt-2)', 3: 'var(--txt-3)' },
        /* DEFAULT is the AA-safe text tone; `line` is the decorative bronze. */
        bronze:  {
          DEFAULT: 'var(--accent-text)',
          line:    'var(--accent)',
          h:       'var(--accent-h)',
          bg:      'var(--accent-bg)',
          bd:      'var(--accent-bd)',
        },
        line:    'var(--line)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Times New Roman', 'serif'],
        sans:  ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        btn:  'var(--r-btn)',
        el:   'var(--r-el)',
        card: 'var(--r-card)',
      },
      boxShadow: {
        soft: 'var(--shadow-sm)',
        card: 'var(--shadow)',
        lift: 'var(--shadow-lg)',
      },
      maxWidth: {
        page: '1280px',
        prose: '68ch',
      },
      spacing: {
        section: '120px',
      },
    },
  },
  plugins: [],
};

export default config;
