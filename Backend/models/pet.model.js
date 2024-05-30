const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	name: {
		type: String,
		required: true
	},
    exp: {
		type: Number,
		required: true
	}
},
{
	timestamps: true
});

const Item = mongoose.model('pets', petSchema);

module.exports = Item;
