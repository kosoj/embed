goog.provide('app.contracts.Store');

goog.require('goog.Promise');
goog.require('goog.array');
goog.require('goog.events.EventTarget');

/**
  @constructor
  @extends {goog.events.EventTarget}
*/
app.contracts.Store = function() {
  goog.base(this);

  this.contracts = [
    {number: 1, ident: 11, text: 'Hoří má panenko.'},
    {number: 2, ident: 22, text: 'Smlouva s ďáblem.'},
    {number: 3, ident: 33, text: 'Společenská smlouva.'},
    {number: 4, ident: 44, text: 'To by mělo stačit.'}
  ];

  /**
    @type {Array.<app.contracts.Contract>}
  */
  this.foundContracts = [];

};
goog.inherits(app.contracts.Store, goog.events.EventTarget);

/**
  TODO: Search filter.
  @param {app.contracts.Contract} searchFilter
  @return {!goog.Promise}
*/
app.contracts.Store.prototype.search = function(searchFilter) {
  var promise = this.simulate1SecLoading();

  return promise
    .then(function(contracts) {
      this.foundContracts = contracts;
      this.notify();
    }.bind(this));
};

// NOTE(steida): We can specify what exactly has been changed to
// call XHR for server by param.
app.contracts.Store.prototype.notify = function() {
  this.dispatchEvent({
    type: 'change'
  });
};

/**
  @return {!goog.Promise}
*/
app.contracts.Store.prototype.simulate1SecLoading = function() {
  return new goog.Promise(function(resolve, reject) {

    setTimeout(function() {
      resolve(this.contracts);
    }.bind(this), 1000);

  }, this);
};

/**
  @param {string} number Yeah, that's what I call great props namming ;)
  @return {app.contracts.Contract}
*/
app.contracts.Store.prototype.getContractByNumber = function(number) {
  return goog.array.find(this.contracts, function(contract) {
    return contract.number == number;
  });
};

/**
  @param {app.contracts.Contract} contract
*/
app.contracts.Store.prototype.remove = function(contract) {
  goog.array.remove(this.contracts, contract);
  this.notify();
};
