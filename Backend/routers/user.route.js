const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model'); 

passport.use(new LocalStrategy(User.authenticate()));
const router = express.Router();
const { getAllUsers, getUserById, createUser, loginUser, updateUser } = require('../controllers/user.controller');

router.get('/all', getAllUsers);
router.get('/id/:id', getUserById);
router.post('/register', createUser);
router.post('/login', loginUser);
router.put('/update/:id', updateUser);

module.exports = router;
