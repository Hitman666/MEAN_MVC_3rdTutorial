process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV);

var port = 1337;
var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db = mongoose(),
	app = express(),
	passport = passport();

app.listen(port);

module.exports = app;
console.log('Server running at http://localhost:' + port);