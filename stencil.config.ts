import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';

export const config: Config = {
  namespace: 'stencil-app',
  outputTargets: [
    {
      type: 'www'
    },
    {
      type: 'dist'
    }
  ],
  plugins: [
    postcss({
      plugins: [
        require('stylelint')(),
        require('postcss-custom-media')({
          preserve: true
        }),
        require('postcss-nested'),
        require('postcss-import-url')(),
        require('autoprefixer')(['> 1%', 'last 2 versions', 'IE 11']),
        require('postcss-reporter')({
          clearReportedMessages: true
        })
      ]
    })
  ]
};
