
var MyAppComponent = /** @class **/ (function() {
  function MyApp() {
  }
  MyApp.is = 'my-app';
  MyApp.getModule = function(opts) {
    
    return import('./my-app.js').then(function(m) {
        return m.MyApp;
      });

  }
});

export {
  
  MyApp,
};
  