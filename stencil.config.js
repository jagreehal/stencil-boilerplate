const postcss = require('@stencil/postcss');

exports.config = {
  namespace: 'stencil-app',
  generateDistribution: true,
  generateWWW: true,
  serviceWorker: null,
  plugins: [
    postcss({
      plugins: [
        require('postcss-import')({
          plugins: [require('stylelint')()]
        }),
        require('postcss-cssnext', {
          browsers: ['last 6 versions']
        }),
        require('cssnano'),
        require('postcss-reporter')({
          clearReportedMessages: true
        })
      ]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
