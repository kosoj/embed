goog.provide('app.model.store.StoreRegistry');

goog.require('goog.Promise');
goog.require('goog.array');
goog.require('goog.events.EventTarget');

/**
 @constructor
 @extends {goog.events.EventTarget}
 @author machain
 @since 13.10.2014
 */
app.model.store.StoreRegistry = function () {
  goog.base(this);

  this.stores = [];

};
goog.inherits(app.model.store.StoreRegistry, goog.events.EventTarget);

/**
 * @param {app.model.store.BaseStore} store
 */
app.model.store.StoreRegistry.prototype.addStore = function (store) {
  this.stores.push(store);
  store.listen('change', this.notify.bind(this));
};

/**gulp
 * @param {string} type
 */
app.model.store.StoreRegistry.prototype.notify = function () {
  this.dispatchEvent({
    type: 'change'
  });
};
