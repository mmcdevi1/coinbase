const express = require('express');
const router = express.Router();
const passportService = require('../services/passport');
const passport = require('passport');
const Authentication = require('../controllers/authenticationController');
const bcrypt = require('bcrypt-nodejs');

// Require User Model
const User = require('../models/User');

// Const
const requireLogin     = passport.authenticate('local', { session: false });
const authenticateUser = passport.authenticate('jwt', { session: false }); // To protect pages

// User registration POST route
router.post('/api/register', Authentication.registration);

// User Login POST route
router.post('/api/login', requireLogin, Authentication.login);

// Current user API
router.get('/api/current_user', authenticateUser, (req, res) => {
  if (req.user) {
    res.send(req.user)
  } else {
    res.send(false)
  }
});

// Update current user basic info
router.put('/api/update_current_user', authenticateUser, (req, res) => {
  const user = req.user;

  // const params = {
  //   ...req.body,
  //   updatedAt: Date.now()
  // }

  const params = Object.assign({}, req.body, {
    updatedAt: Date.now()
  })

  User.findByIdAndUpdate(user.id, params, {new: true}, (err, user) => {
    if (err) { return res.status(500).send({ err: 'This username already exists!' }) }

    res.send({user: user, message: 'User updated'})
  })
});

// Update user password
router.put('/api/update_password', authenticateUser, (req, res, next) => {
  const user = req.user;
  const password = req.body.password;

  bcrypt.hash(password, null, null, function (err, hash) {
    if (err) { return next(err) }

    User.findByIdAndUpdate(user.id, Object.assign({}, req.body, { password: hash }), {new: true}, (err, user) => {
      if (err) { return res.status(500).send({ err: 'Error!' }) }

      res.send({user: user, message: 'Password updated'})
    });
  })
})

// User profile page
// IMPORTANT: MUST BE LAST
router.get('/api/:username', authenticateUser, (req, res, next) => {
  User.findOne({username: req.params.username}, (err, user) => {
    if (err) { res.status(400).send({ message: 'no'}) }

    if (user) {
      res.send({ user: user })
    }
  })
});



module.exports = router;