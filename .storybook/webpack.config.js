const path = require('path');
const webpack = require('webpack');

module.exports = ({ config, mode }) => {
  config = Object.assign(
    {
      module: {
        rules: []
      },
      plugins: []
    },
    config || {}
  );

  // SCSS support
  // You'll need to npm install the loaders
  // npm install -D style-loader css-loader sass-loader
  // Then import your .scss into the stories/XXXX.stories.js file

  config.plugins = config.plugins.filter(
    plugin => !(plugin instanceof webpack.DefinePlugin)
  );

  return config;
};
