goog.provide('app.model.store.ContractStore');

goog.require('app.model.store.BaseStore');
goog.require('app.model.entity.Contract');
goog.require('app.model.entity.ContractFilter');
goog.require('goog.Promise');
goog.require('goog.array');

/**
 @param {app.model.store.StoreRegistry} registry
 @constructor
 @extends {app.model.store.BaseStore}
 */
app.model.store.ContractStore = function (registry) {
  goog.base(this, registry);


  this.contracts = [
    {number: 6660000386, type: 'SU', date: '01.01.2014', amount: 85500, customer: {cuid: 4308859, ident: 7800001234, lastname: 'Konečný', firstname: 'Pavel'}},
    {number: 6660000378, type: 'SU', date: '09.09.2014', amount: 20000, customer: {cuid: 4308858, ident: 8700001234, lastname: 'Novak', firstname: 'Jan'}},
    {number: 6660000335, type: 'SU', date: '09.10.2014', amount: 8900, customer: {cuid: 4308855, ident: 6200001234, lastname: 'Krameš', firstname: 'Josef'}},
    {number: 6660000319, type: 'SU', date: '08.10.2014', amount: 10000, customer: {cuid: 4308853, ident: 6600001234, lastname: 'Konečná', firstname: 'Libuše'}}
  ];

  /**
   @type {Array.<app.model.entity.Contract>}
   */
  this.foundContracts = [];

};
goog.inherits(app.model.store.ContractStore, app.model.store.BaseStore);

/**
 @param {app.model.entity.ContractFilter} filter
 @return {!goog.Promise}
 */
app.model.store.ContractStore.prototype.search = function (filter) {
  var promise = this.simulate1SecLoading();

  return promise
    .then(function (contracts) {
      this.foundContracts = contracts;
      this.notify();
    }.bind(this));
};

/**
 @return {!goog.Promise}
 */
app.model.store.ContractStore.prototype.simulate1SecLoading = function () {
  return new goog.Promise(function (resolve, reject) {

    setTimeout(function () {
      resolve(this.contracts);
    }.bind(this), 1000);

  }, this);
};

/**
 @param {string} number Yeah, that's what I call great props namming ;)
 @return {app.model.entity.Contract}
 */
app.model.store.ContractStore.prototype.getContractByNumber = function (number) {
  return goog.array.find(this.contracts, function (contract) {
    return contract.number == number;
  });
};

/**
 @param {app.model.entity.Contract} contract
 */
app.model.store.ContractStore.prototype.remove = function (contract) {
  goog.array.remove(this.contracts, contract);
  this.notify();
};
