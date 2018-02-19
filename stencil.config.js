const postcss = require('@stencil/postcss');
const autoprefixer = require('autoprefixer');

exports.config = {
  namespace: 'stencil-app',
  generateDistribution: true,
  generateWWW: true,
  serviceWorker: null,
  plugins: [
    postcss({
      plugins: [
        require('stylelint'),
        require('postcss-import'),
        require('css-mqpacker'),
        require('postcss-cssnext', {
          browsers: ['last 6 versions'],
          cascade: false
        })
      ]
    })
  ]
};

exports.devServer = { root: 'www', watchGlob: '**/**' };
