const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// User Schema Setup
const UserSchema = new mongoose.Schema({
  firstName:   String,
  lastName:    String,
  email:       { type: String, unique: true, lowercase: true },
  username:    { type: String, unique: true },
  password:    String,  
  admin:       { type: Boolean, default: false },
  researcher:  { type: Boolean, default: false },
  contributor: { type: Boolean, default: false },
  createdAt:   Date,
  updatedAt:   Date,
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

// User Model Methods

// Compare user input password on login to the encrypted password
UserSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, res) {
    if (err) { return callback(err) }

    callback(null, res);
  })
}

module.exports = mongoose.model('User', UserSchema);