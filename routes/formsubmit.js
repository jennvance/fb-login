var express = require('express');
var router = express.Router();
var userModels = require('../models/user');
console.log('models? ', userModels)
/* GET home page. */
router.post('/', function(req, res) {
	console.log(req.body);


    res.redirect('/');
});

module.exports = router;