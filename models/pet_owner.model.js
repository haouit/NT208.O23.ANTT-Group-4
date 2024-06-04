const mongoose = require('mongoose');	

const pet_ownerSchema = mongoose.Schema({
	petId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Pet',
		required: true
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
},
{
	timestamps: true
});

const Pet_owner = mongoose.model('pet_owners', pet_ownerSchema);

module.exports = Pet_owner;
