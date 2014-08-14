goog.provide('App');

/**
  @param {este.Router} router
  @param {app.Routes} routes
  @param {Element} element
  @param {app.react.App} reactApp
  @constructor
 */
App = function(router, routes, element, reactApp) {

  var syncUI = function() {
    // document.title = appTitle.get()
    React.renderComponent(<reactApp.component />, element);
  };

  routes.addToEste(router);
  routes.listen('change', syncUI);
  router.start()
};
