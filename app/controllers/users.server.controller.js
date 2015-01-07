var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
	console.log(req.body);
	
	var user = new User(req.body);
	user.save(function(err) {
		if (err) {
			return next(err);
		}
		else {
			res.json(user);
		}
	});
};