const path = require('path');
const postcss = require('@stencil/postcss');
const sass = require('@stencil/sass');

exports.config = {
  namespace: 'stencil-app',
  outputTargets: [{
    type: 'www'
  }, {
    type: 'dist'
  }],
  plugins: [
    sass({
      includePaths: [path.resolve(__dirname, 'src/scss')]
    }),
    postcss({
      plugins: [
        require('autoprefixer')({
          browsers: ['last 2 versions']
        }),
        require('cssnano')(),
        require('postcss-reporter')()
      ]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};