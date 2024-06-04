const mongoose = require('mongoose');	

const billSchema = mongoose.Schema({
	itemId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Item',
		required: true
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	quantity: {
		type: Number,
		required: true
	}
},
{
	timestamps: true
});

const Bill = mongoose.model('bills', billSchema);

module.exports = Bill;
