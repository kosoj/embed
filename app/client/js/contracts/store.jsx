goog.provide('app.contracts.Store');

goog.require('goog.Promise');
goog.require('goog.array');

/**
  @constructor
*/
app.contracts.Store = function() {
  this.contracts = [
    {number: 1, ident: 11, text: 'Hoří má panenko.'},
    {number: 2, ident: 22, text: 'Smlouva s ďáblem.'},
    {number: 3, ident: 33, text: 'Společenská smlouva.'},
    {number: 4, ident: 44, text: 'To by mělo stačit.'}
  ];
}

/**
  TODO: ulozi contrct na sobě, takže si to komponenta, sosne ze store
  @param {app.contracts.Contract} searchFilter
  @return {!goog.Promise}
*/
app.contracts.Store.prototype.search = function(searchFilter) {
  // TODO: Search filter.
  return new goog.Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(this.contracts);
    }.bind(this), 1000);
  }, this);
}

/**
  @param {string} number Yeah, that's what I call great props namming ;)
  @return {app.contracts.Contract}
*/
app.contracts.Store.prototype.getContractByNumber = function(number) {
  return goog.array.find(this.contracts, function(contract) {
    return contract.number == number;
  });
}
