goog.provide('app.Routes');

goog.require('este.Routes');

/**
  @constructor
  @extends {este.Routes}
 */
app.Routes = function() {
  app.Routes.superClass_.constructor.call(this);

  // home
  this.home = this.route('/');
  this.home.name = 'Home';
  this.home.main = true;
  // contract
  this.contract = this.route('/contract');
  this.contract.name = 'Search contracts';
  this.contract.main = true;
  this.contract.children = [];
  // contract detail
  this.contractDetail = this.route('/contract/:id');
  this.contractDetail.name = 'Contract Detail';
  this.contractDetail.parent = this.contract;
  this.contract.children.push(this.contractDetail);


  // this.notFound = this.route('*');
}
goog.inherits(app.Routes, este.Routes);

/**
 *
 * @param {este.Route} route
 * @returns {boolean}
 */
app.Routes.prototype.isActive = function(route) {
  return this.active == route;
}

/**
 * @returns {Array.<este.Route>}
 */
app.Routes.prototype.getList = function() {
  return this.list;
}