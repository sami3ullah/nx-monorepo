import { definePreset } from '@pandacss/dev';
import { accordionRecipe, buttonRecipe } from './recipes';

// define all your theme preset here
export const propiflyPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          'nice-yellow': { value: '#facc15' },
          'dark-green': { value: 'green' },
        },
        animations: {
          slideIn: {
            '0%': {
              transform: {
                value: 'translateX(-100%)',
                opacity: { value: '0' },
              },
            },
            '100%': {
              transform: { value: 'translateX(0)', opacity: { value: '1' } },
            },
          },
        },
      },
      semanticTokens: {
        colors: {
          'propifly-yellow': {
            'nice-yellow': { value: '{colors.nice-yellow}' },
          },
        },
      },
      recipes: {
        accordionRecipe,
        buttonRecipe,
      },
    },
  },
});
