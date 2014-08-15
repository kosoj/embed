goog.provide('app.Routes');

goog.require('este.Routes');

/**
  @constructor
  @extends {este.Routes}
 */
app.Routes = function() {
  app.Routes.superClass_.constructor.call(this);

  this.home = this.route('/');
  this.contracts = this.route('/contracts');
  this.contractDetail = this.route('/contract/:id');

  // this.notFound = this.route('*');
}
goog.inherits(app.Routes, este.Routes);
