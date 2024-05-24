const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model'); 

passport.use(new LocalStrategy(User.authenticate()));
const router = express.Router();
const { getAllUsers, getUserById, createUser, loginUser, updateUser } = require('../controllers/user.controller');

const { requireAuth, checkUser } = require('../middleware/auth');

router.get('*', checkUser);
router.get('/all', requireAuth, getAllUsers);
router.get('/id/:id', requireAuth, getUserById);
router.post('/register', createUser);
router.post('/login', loginUser);
router.put('/update/:id', requireAuth, updateUser);

module.exports = router;
