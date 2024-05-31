const express = require('express');

const router = express.Router();
const { petPet, checkPet, expUp } = require('../controllers/pet.controller');

router.post('/add', petPet);
router.get('/check/:userId', checkPet);
router.post('/exp', expUp);

module.exports = router;
