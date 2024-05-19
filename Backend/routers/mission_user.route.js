const express = require('express');

const router = express.Router();
const { getAllMission_users, getMission_userById, createMission_user } = require('../controllers/mission_user.controller');

router.get('/all', getAllMission_users);
router.get('/id/:id', getMission_userById);
router.post('/create', createMission_user);

module.exports = router;
