goog.provide('app.model.entity.Contract');

goog.require('app.model.entity.Customer');
goog.require('app.model.common.ValidationError');

/**
 @constructor
 */
app.model.entity.Contract = function () {

  /**
   @type {string}
   */
  this.number = '';
  /**
   @type {string}
   */
  this.type = '';
  /**
   @type {string}
   */
  this.date = '';
  /**
   @type {string}
   */
  this.amount = '';
  /**
   @type {app.model.entity.Customer}
   */
  this.customer = null;

};

/**
 @return {Array.<app.model.common.ValidationError>}
 */
app.model.entity.Contract.prototype.validate = function () {
  var errors = [];
  return errors;
};