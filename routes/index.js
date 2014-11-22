var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  	title: 'Get a Beta',
  	user: req.user 
  });
});

module.exports = router;
