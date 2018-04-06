const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// User Schema Setup
const UserSchema = new mongoose.Schema({
  firstName: String,

  lastName: String,

  email: { type: String, unique: true, lowercase: true },

  username: { type: String, unique: true },

  password: String,  

  admin: { type: Boolean, default: false },

  researcher: { type: Boolean, default: false },

  contributor: { type: Boolean, default: false },

  createdAt: Date,

  updatedAt: Date,
})

// Encrypt password with Bcrypt
UserSchema.pre('save', function (next) {
  const user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) { return next(err) }

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) { return next(err) }

      user.password = hash;
      next();
    })
  })
});

module.exports = mongoose.model('User', UserSchema);