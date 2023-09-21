export default {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../lib/**/*.stories.mdx",
    "../lib/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "@storybook/addon-mdx-gfm",
    "storybook-dark-mode",
  ],

  // framework: {
  //   name: "@storybook/nextjs",
  //   options: {},
  // },
  docs: {
    autodocs: true,
  },

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};
