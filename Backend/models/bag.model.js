const mongoose = require('mongoose');	

const bagSchema = mongoose.Schema({
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

const Bag = mongoose.model('bags', bagSchema);

module.exports = Bag;
