import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: { index: 'src/index.ts' },
    format: ['esm'],
    fixedExtension: false,
    dts: true,
    clean: true,
  },
  {
    entry: { cli: 'src/cli.ts' },
    format: ['esm'],
    fixedExtension: false,
    banner: { js: '#!/usr/bin/env node' },
    clean: false,
  },
]);
