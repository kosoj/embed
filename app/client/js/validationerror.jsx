goog.provide('app.ValidationError');

/**
  @param {string} message
  @param {string=} prop
  @constructor
 */
app.ValidationError = function(message, prop) {
  this.message = message;
  this.prop = prop;
};
