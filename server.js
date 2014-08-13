var express = require('express');

var app = express();

app.use('/bower_components', express.static('bower_components'));
app.use(express.static(__dirname + '/app'));


var port = 8000;
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
