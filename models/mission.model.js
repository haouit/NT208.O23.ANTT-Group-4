const mongoose = require('mongoose');

const missionSchema = mongoose.Schema({
	name: {
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

const Mission = mongoose.model('missions', missionSchema);

module.exports = Mission;
