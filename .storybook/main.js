const path = require('path');
const glob = require('glob');
const packageJson = require('../package.json');

module.exports = {
  stories: [`${__dirname}/../src/components/**/*.stories.*`],
  presets: ['@storybook/addon-docs/preset'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      },
    },
  ],
  webpackFinal: (config) => {
    const distDir = path.resolve(__dirname, `../dist/${packageJson.name}`);
    const files = glob.sync(`${distDir}/**/*.{js,css}`, {
      absolute: true,
      ignore: ['**/*.esm.js'],
    });
    config.entry.push(...files);
    return config;
  },
};
