goog.provide('app.model.entity.Customer');

goog.require('app.model.common.ValidationError');

/**
 @constructor
 */
app.model.entity.Customer = function () {

  /**
   @type {number}
   */
  this.cuid = null;
  /**
   @type {string}
   */
  this.lastname = '';
  /**
   @type {string}
   */
  this.firstname = '';
  /**
   @type {string}
   */
  this.ident = '';


};

/**
 @return {Array.<app.model.common.ValidationError>}
 */
app.model.entity.Customer.prototype.validate = function () {
  var errors = [];

  return errors;
};