import { defineConfig } from '@pandacss/dev';
import { propiflyPreset } from './src/preset';
import { createPreset } from '@park-ui/panda-preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ['@pandacss/preset-base', propiflyPreset, createPreset({})],

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  outExtension: 'js',

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  staticCss: {
    recipes: '*',
    css: [
      {
        properties: {
          animation: ['*'],
        },
      },
    ],
  },
  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
});
