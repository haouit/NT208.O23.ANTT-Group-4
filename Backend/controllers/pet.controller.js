const Pet = require('../models/pet.model');
const Bag = require('../models/bag.model');

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

const expUp = async (req, res) => {
	try {
		const userId = req.body.userId;
		// add exp
		if (req.body.foodRequire != -1) {
			const bag = await Bag.findOne({
				userId
			});
			if (bag) {
				const id = ['663e0d50adbede46c0bd88bb', '663e0da1adbede46c0bd88bd', '663e0d8fadbede46c0bd88bc'];
				const foodId = id[req.body.foodRequire];
				const food = bag.userItems.find(item => item.itemId == foodId);
				if (!food) {
					res.status(400).json({ message: 'Insufficient food' });
					return;
				}
				if (food.quantity == 0) {
					res.status(400).json({ message: 'Insufficient food' });
					return;
				}
				// update bag quantity
				await Bag.findOneAndUpdate(
					{ userId: req.body.userId },
					{ $inc: { "userItems.$[elem].quantity": -1 } },
					{ arrayFilters: [{ "elem.itemId": foodId }] }
				);
			} else {
				res.status(400).json({ message: 'Insufficient food' });
				return;
			}
		}
		const pet = await Pet.findOne({
			userId: req.body.userId
		});
		pet.exp += req.body.exp;
		await pet.save();
		res.status(200).json(pet);
	}
	catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = {
	petPet,
	checkPet,
	expUp
};
