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

  // // Require email, password and username
  // if (!email || !password || !username) {
  //   return res.status(422).send({ error: 'Email, password and username are required!' })
  // }

  // // Determine if email or username exists
  // User.findOne({ $or: [ {username: username}, {email: email} ] }, (err, user) => {
  //   if (err) { return next(err) }

  //   if (user) {
  //     return res.status(422).send({ error: 'Sorry, this email or username already exists!' })
  //   } 
  // })

  // Create new user
  User.create(req.body)
    .then(res => {
      res.send({ token: sessionsToken(res.data), user: res.data });
    })
    .catch(err => {
      console.log(err)
    })
}

// To be used in the User LOGIN POST route in routes/authRoutes.js
exports.login = (req, res, next) => {
  if (!req.user) {
    res.send({error: 'no user'})
  }
  res.send({ token: sessionsToken(req.user), user: req.user });
}

