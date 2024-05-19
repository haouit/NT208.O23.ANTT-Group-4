const User = require('../models/user.model');
const pet = require('../models/pet.model');
const Pet_owner = require('../models/pet_owner.model');

const getAllPet_owners = async (req, res) => {
    try {
        const pet_owners = await Pet_owner.find();
        res.status(200).json(pet_owners);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPet_ownerById = async (req, res) => {
    try {
        const pet_owner = await Pet_owner.findById(req.params.id);
        res.status(200).json(pet_owner);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createPet_owner = async (req, res) => {
    try {
        const pet_owner = await Pet_owner.create({
            petId: req.body.petId,
            userId: req.body.userId
        });
        res.status(200).json(achieve);
        console.log('[Pet_owner] Created: ' + pet_owner._id);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllPet_owners,
    getPet_ownerById,
    createPet_owner
};
