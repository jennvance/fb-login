var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	fbId: String,
	name: String,
	email: String,
	age: Number
});

//define your Model:
var User = mongoose.model('User', userSchema);

module.exports = User;