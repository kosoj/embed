goog.provide('App');

/**
 @param {este.Router} router
 @param {app.Routes} routes
 @param {Element} element
 @param {app.react.Container} container
 @param {app.model.store.StoreRegistry} storeRegistry
 @constructor
 */
App = function (router, routes, element, container, storeRegistry) {

  var syncUI = function () {
    React.renderComponent(<container.component />, element);
  };

  routes.addToEste(router, function (route, params) {
    routes.setActive(route, params);
    syncUI();
  });

  storeRegistry.listen('change', syncUI);

  router.start()
};
