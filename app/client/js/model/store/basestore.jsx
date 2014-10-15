goog.provide('app.model.store.BaseStore');

goog.require('app.model.store.StoreRegistry');
goog.require('goog.events.EventTarget');

/**
 @param {app.model.store.StoreRegistry} registry
 @constructor
 @extends {goog.events.EventTarget}
 @author machain
 @since 13.10.2014
 */
app.model.store.BaseStore = function (registry) {
  goog.base(this);

  registry.addStore(this);

};
goog.inherits(app.model.store.BaseStore, goog.events.EventTarget);


// NOTE(steida): We can specify what exactly has been changed to call XHR for server by param.
app.model.store.BaseStore.prototype.notify = function () {
  this.dispatchEvent({
    type: 'change'
  });
};


