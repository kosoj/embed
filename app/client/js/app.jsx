goog.provide('App');

goog.require('app.react.App');

/**
  @param {Element} element
  @constructor
 */
App = function(element) {
  this.element = element;
  this.syncUI();
};

App.prototype.syncUI = function() {
  // document.title = appTitle.get()
  React.renderComponent(<app.react.App />, this.element);
};
