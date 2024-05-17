const mongoose = require('mongoose');	

const billSchema = mongoose.Schema({
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

const Bill = mongoose.model('achieves', billSchema);

module.exports = Bill;
