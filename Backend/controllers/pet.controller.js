const Pet = require('../models/pet.model');

const petPet = async (req, res) => {
	try {
		// add pet
		const pet = await Pet.create({
			userId: req.body.userId,
			name: req.body.name,
			exp: 0,
		});
		res.status(201).json(pet);
		console.log('[Pet] User ' + pet.userId + ' started to take care ' + pet.name);
	}
	catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const checkPet = async (req, res) => {
	try {
		// check pet
		const pet = await Pet.findOne({
			userId: req.params.userId
		});
		if (pet) {
			res.status(200).json(pet);
		}
	}
	catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = {
	petPet,
	checkPet
};
