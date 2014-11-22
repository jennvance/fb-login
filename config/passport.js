var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');

//Session serialization
passport.serializeUser(function(user, next){
	next(null, user._id);
});
passport.deserializeUser(function(userId, next){
	User.findById(userId, function(err, user){
		next(err, user);
	});
});


var fbStrategy = new FacebookStrategy({
	clientID: '956336731059421',
	clientSecret: '6b56d5d946e6de4e064195e12a6ce834',
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
passport.use(fbStrategy);

module.exports = {
	ensureAuthenticated: function(req, res, next){
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/auth');
	}
};