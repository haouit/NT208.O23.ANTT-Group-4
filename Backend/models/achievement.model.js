const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
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

const Item = mongoose.model('pets', itemSchema);

module.exports = Item;
