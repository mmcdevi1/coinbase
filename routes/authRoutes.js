const express = require('express');
const router = express.Router();
const passport = require('passport');
const Authentication = require('../controllers/authenticationController')

// Require User Model
const User = require('../models/User');

// User registration POST route
router.post('/register', Authentication.registration)

module.exports = router;