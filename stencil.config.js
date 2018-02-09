exports.config = {
  namespace: 'stencil-app',
  generateDistribution: true,
  generateWWW: true,
  serviceWorker: null
};

exports.devServer = { root: 'www', watchGlob: '**/**' };
