const mongoose = require('mongoose');	

const minssion_userSchema = mongoose.Schema({
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

const Mission_User = mongoose.model('mission_users', minssion_userSchema);

module.exports = Mission_User;
