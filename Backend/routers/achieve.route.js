const express = require('express');

const router = express.Router();
const { getAllAchieves, getAchieveById, createAchieve } = require('../controllers/achieve.controller');

router.get('/all', getAllAchieves);
router.get('/id/:id', getAchieveById);
router.post('/create', createAchieve);

module.exports = router;
