import coreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

/**
 * Flat config — required by eslint 9, which eslint-config-next@16 depends on.
 * The previous eslint 8.57 pin made `npm install` fail outright with ERESOLVE.
 */
const config = [
  ...coreWebVitals,
  ...nextTypescript,
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'],
  },
];

export default config;
