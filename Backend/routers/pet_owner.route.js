const express = require('express');

const router = express.Router();
const { getAllPet_owners, getPet_ownerById, createPet_owner } = require('../controllers/pet_owner.controller');

router.get('/all', getAllPet_owners);
router.get('/id/:id', getPet_ownerById);
router.post('/create', createPet_owner);

module.exports = router;
