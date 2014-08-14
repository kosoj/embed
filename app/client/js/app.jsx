goog.provide('App');

goog.require('app.react.App');

/**
  @param {este.Router} router
  @param {app.Routes} routes
  @param {Element} element
  @constructor
 */
App = function(router, routes, element) {
  this.element = element;
  this.routes = routes;
  routes.addToEste(router);
  routes.listen('change', this.syncUI.bind(this));
  router.start()
};

App.prototype.syncUI = function() {
  // document.title = appTitle.get()
  React.renderComponent(<app.react.App routes={this.routes} />, this.element);
};
