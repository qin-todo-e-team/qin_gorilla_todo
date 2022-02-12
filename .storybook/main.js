module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/component/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs/register",
  ],
  framework: "@storybook/react",
};
