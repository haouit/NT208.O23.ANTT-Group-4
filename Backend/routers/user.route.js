const express = require('express');

const router = express.Router();
const { getAllUsers, getUserById, createUser, loginUser, updateUser } = require('../controllers/user.controller');

router.get('/all', getAllUsers);
router.get('/id/:id', getUserById);
router.post('/register', createUser);
router.post('/login', loginUser);
router.put('/update/:id', updateUser);

module.exports = router;
