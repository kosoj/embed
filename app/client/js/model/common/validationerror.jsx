goog.provide('app.model.common.ValidationError');

/**
  @param {string} message
  @param {string=} prop
  @constructor
 */
app.model.common.ValidationError = function(message, prop) {
  this.message = message;
  this.prop = prop;
};
