const express = require('express');

const router = express.Router();
const { petPet, checkPet, expUp, chatWithPet } = require('../controllers/pet.controller');

router.post('/add', petPet);
router.get('/check/:userId', checkPet);
router.post('/exp', expUp);
router.post('/chat', chatWithPet)
module.exports = router;
