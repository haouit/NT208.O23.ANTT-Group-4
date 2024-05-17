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

const Item = mongoose.model('achievements', itemSchema);

module.exports = Item;
