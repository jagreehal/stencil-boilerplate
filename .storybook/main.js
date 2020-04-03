module.exports = {
  stories: [`${__dirname}/../src/components/**/*.stories.*`],
  presets: ["@storybook/addon-docs/preset"],
  addons: ["@storybook/addon-a11y/register", "@storybook/addon-knobs/register"],
};
