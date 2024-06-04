const mongoose = require('mongoose');	

const achieveSchema = mongoose.Schema({
	itemId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Achievement',
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

const Achieve = mongoose.model('achieves', achieveSchema);

module.exports = Achieve;
