goog.provide('App');

/**
  @param {este.Router} router
  @param {app.Routes} routes
  @param {Element} element
  @param {app.react.App} reactApp
  @param {app.contracts.Store} contractsStore
  @constructor
 */
App = function(router, routes, element, reactApp, contractsStore) {

  var syncUI = function() {
    // document.title = appTitle.get()
    React.renderComponent(<reactApp.component />, element);
  };

  routes.addToEste(router);
  routes.listen('change', syncUI);

  // TODO(steida): We are slowly overloading app, there should be a object
  // which responsibility is to watch all stores and notify changes.
  contractsStore.listen('change', syncUI);

  router.start()
};
