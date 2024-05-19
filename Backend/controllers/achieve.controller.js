const Achievement = require('../models/achievement.model');
const User = require('../models/user.model');
const Achieve = require('../models/achieve.model');

const getAllAchieves = async (req, res) => {
    try {
        const achieves = await Achieve.find();
        res.status(200).json(achieves);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAchieveById = async (req, res) => {
    try {
        const achieve = await Achieve.findById(req.params.id);
        res.status(200).json(achieve);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createAchieve = async (req, res) => {
    try {
        const achieve = await Achieve.create({
            achievement: req.body.achieveId,
            userId: req.body.userId
        });
        res.status(200).json(achieve);
        console.log('[Achieve] Created: ' + achieve._id);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllAchieves,
    getAchieveById,
    createAchieve
};
