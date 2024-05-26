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
	level: {
		type: Number,
		required: true
	},
	coin: {
		type: Number,
		required: true
	}
},
{
	timestamps: true
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('users', userSchema);

module.exports = User;
