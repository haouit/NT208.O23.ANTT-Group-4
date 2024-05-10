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
	price: {
		type: Number,
		required: true
	}
},
{
	timestamps: true
});

const Item = mongoose.model('items', itemSchema);

module.exports = Item;
