const express = require('express');

const router = express.Router();
const { getAllPet_oners, getPet_onerById, createPet_oner } = require('../controllers/pet_owner.controller');

router.get('/all', getAllPet_oners);
router.get('/id/:id', getPet_onerById);
router.post('/create', createPet_oner);

module.exports = router;
