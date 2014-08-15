goog.provide('app.contracts.Store');

goog.require('goog.Promise');

/**
  @constructor
*/
app.contracts.Store = function() {

}

/**
  @param {app.contracts.Contract} contract
  @return {!goog.Promise}
*/
app.contracts.Store.prototype.search = function(contract) {
  var contracts = [
    {number: 1, ident: 11, text: 'Hoří má panenko.'},
    {number: 2, ident: 22, text: 'Smlouva s ďáblem.'},
    {number: 3, ident: 33, text: 'Společenská smlouva.'},
    {number: 4, ident: 44, text: 'To by mělo stačit.'}
  ]

  return new goog.Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(contracts);
    }, 3000);
  })
}
