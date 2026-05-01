import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'var(--ink)',
          muted:   'var(--ink-muted)',
          soft:    'var(--ink-soft)',
        },
        paper: {
          DEFAULT: 'var(--paper)',
          tint:    'var(--paper-tint)',
          hi:      'var(--paper-hi)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hi:      'var(--accent-hi)',
          dim:     'var(--accent-dim)',
        },
        rule: 'var(--rule)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.015em',
        tighter2: '-0.025em',
        tighter3: '-0.04em',
      },
      maxWidth: {
        prose: '64ch',
        page:  '1100px',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.9' }],
        '9xl':  ['8rem',  { lineHeight: '0.9' }],
        '8xl':  ['6rem',  { lineHeight: '0.9' }],
      },
    },
  },
  plugins: [],
};

export default config;
