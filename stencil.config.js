const path = require('path');
const sass = require('@stencil/sass');

exports.config = {
  autoprefixer: [
    '> 1%',
    'last 2 versions',
    'IE 11'
  ],
  namespace: 'stencil-app',
  outputTargets: [{
    type: 'www'
  }, {
    type: 'dist'
  }],
  plugins: [
    sass({
      includePaths: [path.resolve(__dirname, 'src/scss')]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};