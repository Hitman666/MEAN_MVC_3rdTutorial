process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var port = 1337;
var mongoose = require('./config/mongoose'),
	express = require('./config/express');

var db = mongoose(),
	app = express();

app.listen(port);

module.exports = app;
console.log('Server running at http://localhost:' + port);