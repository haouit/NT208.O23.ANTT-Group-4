const mongoose = require('mongoose');	

const minsson_userSchema = mongoose.Schema({
	missionID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Mission',
		required: true
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
},
{
	timestamps: true
});

const Misson_User = mongoose.model('misson_users', minsson_userSchema);

module.exports = Misson_User;
