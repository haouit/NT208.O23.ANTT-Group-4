const mongoose = require('mongoose');

const achievementSchema = mongoose.Schema({
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

const Achievement = mongoose.model('achievements', achievementSchema);

module.exports = Achievement;
