const express = require('express');
const router = express.Router();
const passportService = require('../services/passport');
const passport = require('passport');
const Authentication = require('../controllers/authenticationController')

// Require User Model
const User = require('../models/User');

// Const 
const requireLogin     = passport.authenticate('local', { session: false });
const authenticateUser = passport.authenticate('jwt', { session: false }); // To protect pages

// User registration POST route
router.post('/register', Authentication.registration);

// User Login POST route
router.post('/login', requireLogin, Authentication.login);

// Current user API
router.get('/api/current_user', authenticateUser, (req, res) => {
  if (req.user) {
    res.send(req.user)
  } else {
    res.send(false)
  }
});

module.exports = router;