var config, doc;
config = require('./config');
if (!config.env.development || require('piping')()) {
  // Add Server Google Closure.
  require('../../bower_components/closure-library/closure/goog/bootstrap/nodejs.js');
  require('../../tmp/deps.js');
  global.React = require('react');
  doc = require('jsdom').jsdom();
  global.window = doc.parentWindow;
  global.document = doc.parentWindow.document;
  goog.require('server.main');
  server.main(config);
}
