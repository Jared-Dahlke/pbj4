import '../lib/tailwind.css'

import { withThemeByClassName } from '@storybook/addon-styling'

const globalDecorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme
  console.log(theme)
  return (
    <div
      className="bg-background"
      style={{
       padding: 64,
       borderRadius: 4,
      // backgroundColor: theme === 'light' ? '0 0% 100%' : 'hsl(222.2 84% 4.9%)' // 'hsl(var(--background))'
      }}
    >
      <StoryFn />
     
    </div>
  )
}

export const decorators = [
  globalDecorator,
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),
]


export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
