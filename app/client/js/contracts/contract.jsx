goog.provide('app.contracts.Contract');

goog.require('app.ValidationError');

/**
  @constructor
*/
app.contracts.Contract = function() {

  /**
    @type {string}
  */
  this.number = '';

  /**
    @type {string}
  */
  this.ident = '';

};

/**
  @return {Array.<app.ValidationError>}
*/
app.contracts.Contract.prototype.validate = function() {
  var errors = [];
  if (!this.number)
    errors.push(new app.ValidationError('Nejni cislo padre.', 'number'));
  if (this.number.length > 10)
    errors.push(new app.ValidationError('Mooooooc dlouhy.', 'number'));
  if (!this.ident)
    errors.push(new app.ValidationError('Nejni cislo kámo.', 'ident'));
  if (this.ident.length > 12)
    errors.push(new app.ValidationError('Hrozně dlouhý.', 'ident'));
  return errors;
}
