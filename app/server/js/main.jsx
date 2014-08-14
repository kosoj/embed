goog.provide('server.main');

var express = require('express');
var path = require('path');

/**
  @param {Object} config
 */
server.main = function(config) {

  var app = express();
  var port = 8000;

  app.use('/bower_components', express.static('bower_components'));
  app.use('/app', express.static('app'));
  app.use('/tmp', express.static('tmp'));

  app.route('/').get(function(req, res) {
    var indexPath = path.join(__dirname, '../index.html');
    res.sendFile(indexPath);
  });

  app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });

};
goog.exportSymbol('server.main', server.main);
