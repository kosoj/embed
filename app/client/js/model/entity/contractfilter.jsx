goog.provide('app.model.entity.ContractFilter');

goog.require('app.model.common.ValidationError');

/**
 @constructor
 */
app.model.entity.ContractFilter = function () {

  /**
   @type {string}
   */
  this.number = '';
  /**
   @type {string}
   */
  this.ident = '';
  /**
   @type {string}
   */
  this.date = '';

};

/**
 @return {Array.<app.model.common.ValidationError>}
 */
app.model.entity.ContractFilter.prototype.validate = function () {
  var errors = [];
  if (!this.number) {
    errors.push(new app.model.common.ValidationError('Nejni cislo padre.', 'number'));
  }
  if (this.number.length > 10) {
    errors.push(new app.model.common.ValidationError('Mooooooc dlouhy.', 'number'));
  }
  if (!this.ident) {
    errors.push(new app.model.common.ValidationError('Nejni cislo kámo.', 'ident'));
  }
  if (this.ident.length > 12) {
    errors.push(new app.model.common.ValidationError('Hrozně dlouhý.', 'ident'));
  }
  return errors;
};