const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
	description: {
		type: String,
		required: true
	},
	type: {
		type: String,
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

const Item = mongoose.model('items', itemSchema);

module.exports = Item;
