const User = require('../models/User');
const jwt = require('jwt-simple');
const keys = require('../config/keys');

function sessionsToken (user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.tokenKey)
}

// To be used in the User REGISTRATION POST route in routes/authRoutes.js
exports.registration = (req, res, next) => {
  // Pull properties from the req.body object
  const { firstName, lastName, email, password, username, researcher, contributor } = req.body;

  // Require email, password and username
  if (!email || !password || !username) {
    return res.status(422).send({ error: 'Email, password and username are required!' })
  }

  // Determine if email or username exists
  User.findOne({ $or: [ {username: username}, {email: email} ] }, (err, user) => {
    if (err) { return next(err) }

    if (user) {
      return res.status(422).send({ error: 'Sorry, this email or username already exists!' })
    } 
  })

  // Create new user fields
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: username,
    password: password,    
    researcher: researcher,
    contributor: contributor,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }

  // Create new user
  User.create(user, function (err, user) {
    if (err) { return next(err) }

    res.send({ token: sessionsToken(user), user: user });
  })
}

// To be used in the User LOGIN POST route in routes/authRoutes.js
exports.login = (req, res, next) => {
  if (!req.user) {
    res.send({error: 'no user'})
  }
  res.send({ token: sessionsToken(req.user), user: req.user });
}

