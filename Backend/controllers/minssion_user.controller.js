const Mission = require('../models/mission.model');
const Mission_User = require('../models/mission_user.model');
const User = require('../models/user.model');

const getAllMission_Users = async (req, res) => {
    try {
        const mission_users = await Mission_User.find();
        res.status(200).json(mission_users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMission_UserById = async (req, res) => {
    try {
        const mission_user = await Mission_User.findById(req.params.id);
        res.status(200).json(mission_user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createMission_User = async (req, res) => {
    try {
        const mission_user = await Mission_User.create({
            missionId: req.body.missionId,
            userId: req.body.userId
        });
        res.status(200).json(mission_user);
        console.log('[Mission_user] Created: ' + mission_user._id);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllMission_Users,
    getMission_UserById,
    createMission_User
};
