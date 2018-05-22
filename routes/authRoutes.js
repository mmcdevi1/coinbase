const express = require('express');
const router = express.Router();
const passportService = require('../services/passport');
const passport = require('passport');
const Authentication = require('../controllers/authenticationController');
const CurrentUser = require('../controllers/userController');

// Require User Model
const User = require('../models/User');

// Const
const requireLogin     = passport.authenticate('local', { session: false });
const authenticateUser = passport.authenticate('jwt',   { session: false }); // To protect pages

// User registration POST route
router.post('/register', Authentication.registration);

// User Login POST route
router.post('/login', requireLogin, Authentication.login);

// Current user API
router.get('/current_user', authenticateUser, CurrentUser.get);

// Update current user basic info
router.put('/update_current_user', authenticateUser, CurrentUser.update);

// Update user password
router.put('/update_password', authenticateUser, CurrentUser.updatePassword)

// User profile page
// IMPORTANT: MUST BE LAST
router.get('/:username', authenticateUser, CurrentUser.show);



module.exports = router;

























