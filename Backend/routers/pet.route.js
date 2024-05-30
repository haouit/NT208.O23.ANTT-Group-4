const express = require('express');

const router = express.Router();
const { petPet, checkPet } = require('../controllers/pet.controller');

router.post('/add', petPet);
router.get('/check/:userId', checkPet);

module.exports = router;
