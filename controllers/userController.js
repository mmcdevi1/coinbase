const User = require('../models/User');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

exports.get = (req, res) => {
  req.user ? res.send(req.user) : res.send(false)
}

exports.update = (req, res) => {
  const user = req.user;

  User
    .findById(user.id)
    .then(user => {
      user.update(req.body)
      res.send({ user, message: 'User updated' })
    })
    .catch(err => {
      res.status(500).send({ err: 'This username already exists!' })
    })
}

// UPDATE TO USE SEQUELIZE ****************
exports.updatePassword = (req, res, next) => {
  const user = req.user;
  const password = req.body.password;

  bcrypt.hash(password, null, null, function (err, hash) {
    if (err) { return next(err) }

    User.findByIdAndUpdate(user.id, Object.assign({}, req.body, { password: hash }), {new: true}, (err, user) => {
      if (err) { return res.status(500).send({ err: 'Error!' }) }

      res.send({user: user, message: 'Password updated'})
    });
  })
}

exports.show = (req, res, next) => {
	const { username } = req.params;

  User
    .findOne({
      where: {
        username
      }
    })
    .then(user => {
      res.send({ user })
    })
    .catch(err => {
      res.status(400).send({ message: 'no'})
    })
}