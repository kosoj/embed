goog.provide('app.main');

goog.require('app.DiContainer');

/**
 @param {Object} data Server side data. Useful for config, preload, whatever.
 */
app.main = function (data) {
  var container = new app.DiContainer;

  container.configure({
    resolve: App,
    "with": {
      element: document.body
    }
  }, {
    resolve: este.History,
    by: function () {
      return new este.History({
        forceHash: true
      });
    }
  });

  container.resolveApp();
};
goog.exportSymbol('app.main', app.main);
