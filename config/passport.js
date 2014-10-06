var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');

var fbStrategy = new FacebookStrategy({
	clientID: '',
	clientSecret: '',
	callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(accessToken, refreshToken, profile, next){
	User.findOne({fbId: profile.id}, function(err, user){
		if(user){
			next(null, user);
		} else {
			var newUser = new User({
				fbId: profile.id,
				name: profile.displayName,
				email: profile.emails[0].value
			});
			newUser.save(function(err, user){
				if(err){
					throw err;
				}
				next(null, user);
			});
		}
	});
});