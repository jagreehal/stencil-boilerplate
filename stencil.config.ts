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
        require('postcss-reporter')({
          clearReportedMessages: true
        })
      ]
    })
  ]
};
