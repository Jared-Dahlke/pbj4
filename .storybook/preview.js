import { themes } from '@storybook/theming';

export const parameters = {
  darkMode: {
    stylePreview: true,
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'red' }
  }
};