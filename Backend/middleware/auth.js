require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const requireAuth = (req, res, next) => {
  // const token = req.cookies;
  // check authorization field
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token === 'undefined') {
    res.status(401).json({ redirect: '/login' });
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ redirect: '/login' });
      } else {
        next();
      }
    });
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };
