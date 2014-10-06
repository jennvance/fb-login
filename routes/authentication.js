var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('login', {
		title: 'Login'
	});
});

router.get(
	'/facebook',
	passport.authenticate(
		'facebook', {
			scope: 'email'
		}
	)
);

module.exports = router;