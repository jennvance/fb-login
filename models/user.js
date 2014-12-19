var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	fbId: String,
	name: String,
	email: String,
	// age: Number,

});

// var userMetaSchema = mongoose.Schema({
// 	email: String,
// 	whyBeAReader: String,
// 	favoriteBooks: String
// })

// var UserMeta = mongoose.model('UserMeta', userMetaSchema);

//define your Model:
var User = mongoose.model('User', userSchema);

module.exports.User = User;
// module.exports.UserMeta = UserMeta;