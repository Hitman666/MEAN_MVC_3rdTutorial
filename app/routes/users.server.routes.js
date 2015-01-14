var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');

module.exports = function(app) {
	app.route('/users').post(users.create).get(users.list);

	app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);

	app.param('userId', users.userByID);

	app.route('/register')
		.get(users.renderRegister)
		.post(users.register);

	app.route('/login')
		.get(users.renderLogin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/login',
			failureFlash: true
		}));

	app.get('/logout', users.logout);

	app.get('/oauth/facebook', passport.authenticate('facebook', {
		failureRedirect: '/login',
		scope:['email']
	}));

	app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/login',
		successRedirect: '/',
		scope:['email']
	}));

	app.get('/oauth/twitter', passport.authenticate('twitter', {
		failureRedirect: '/login'
	}));

	app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect: '/login',
		successRedirect: '/'
	}));
};