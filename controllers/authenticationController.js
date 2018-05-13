const User = require('../models/User');
const jwt = require('jwt-simple');
const keys = require('../config/keys');
const Sequelize = require('sequelize')

function sessionsToken (user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.tokenKey)
}

// To be used in the User REGISTRATION POST route in routes/authRoutes.js
exports.registration = (req, res, next) => {
  // Pull properties from the req.body object
  const { firstName, lastName, email, password, username, researcher, contributor } = req.body;

  // // Require email, password and username
  if (!email || !password || !username) {
    return res.status(422).send({ error: 'Email, password and username are required!' })
  }

  // Create new user
  User.create(req.body)
    .then(user => {
      res.send({ token: sessionsToken(user), user });
    })
    .catch(err => {
      // Sends error if user exists
      return next(err)
    })
}

// To be used in the User LOGIN POST route in routes/authRoutes.js
exports.login = (req, res, next) => {
  if (!req.user) {
    res.send({error: 'no user'})
  }
  res.send({ token: sessionsToken(req.user), user: req.user });
}