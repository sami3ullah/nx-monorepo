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
