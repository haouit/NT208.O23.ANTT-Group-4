const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	}
},
{
	timestamps: true
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('users', userSchema);

module.exports = User;
