/*
 App specific externs.

 PATTERN(steida): There are several ways to prevent the compiler from
 renaming symbols: http://stackoverflow.com/questions/11681070/exposing-dynamically-created-functions-on-objects-with-closure-compiler
 Expose annotation seems to be ideal, but unfortunatelly it's brittle: http://goo.gl/rOQP2c
 Quoting properties is verbose and tricky.
 Externs ftw.
 */

/**
 @constructor
 */
function Contract() {
}
Contract.prototype.number;
Contract.prototype.type;
Contract.prototype.date;
Contract.prototype.amount;
Contract.prototype.customer;

/**
 @constructor
 */
function Customer() {
}
Customer.prototype.cuid;
Customer.prototype.ident;
Customer.prototype.lastname;
Customer.prototype.firstname;

/**
 @constructor
 */
function ContractFilter() {
}
ContractFilter.prototype.number;
ContractFilter.prototype.ident;
ContractFilter.prototype.firstname;