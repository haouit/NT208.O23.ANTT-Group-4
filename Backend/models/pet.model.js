const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
    exp: {
		type: Number,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
    status: {
		type: Number,
		required: true
	}
},
{
	timestamps: true
});

const Item = mongoose.model('pets', petSchema);

module.exports = Item;
