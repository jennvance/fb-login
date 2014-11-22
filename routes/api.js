var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res){
	User.find({}, function(err, docs){
		res.send(docs);
	});


	// res.send([{
	// 	name: 'Vance',
	// 	email: 'example@example.com',
	// 	age: 29
	// }]);
});

router.post('/', function(req, res){
	var newReader = new User(req.body);
	newReader.save(function(err, doc){
		res.send(doc);
	})
});


module.exports = router;