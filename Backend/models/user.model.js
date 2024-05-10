const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
},
{
	timestamps: true
});

const User = mongoose.model('users', userSchema);

module.exports = User;
