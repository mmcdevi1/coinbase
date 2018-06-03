const db = require('../db');
const Sequelize = require('sequelize');
const bluebird = require("bluebird");
const bcrypt = bluebird.promisifyAll(require('bcrypt-nodejs'));

const User = db.define('user', {
  firstName: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },

  lastName: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },  

  street: Sequelize.STRING,
  city:  Sequelize.STRING,
  state: Sequelize.STRING,
  zipcode: Sequelize.STRING,  

  email: { 
    type: Sequelize.STRING, 
    unique: true, 
    validate: {
      isLowercase: true
    }
  },

  username: { 
    type: Sequelize.STRING, 
    unique: true 
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      min: 6,
      max: 32,
    },
  },
  
  admin: { 
    type: Sequelize.BOOLEAN,
    defaultValue: false 
  },
  
  researcher: { 
    type: Sequelize.BOOLEAN,
    defaultValue: false 
  },
  
  contributor: { 
    type: Sequelize.BOOLEAN,
    defaultValue: false 
  },

  otherTests: Sequelize.ARRAY(Sequelize.STRING),

  kitOrdered: { 
    type: Sequelize.BOOLEAN, 
    defaultValue: false 
  },
})

User.beforeCreate(function (user, options,) {
  return bcrypt.genSaltAsync(10)
    .then(function (salt) {
      return bcrypt.hashAsync(user.password, salt, null)
    })
    .then(function (hash) {
      user.password = hash
    })
    .catch(function (err) {
      return db.Promise.reject(err)
    })
})

// User Model Methods
User.prototype.orders = function () {

}

// Compare user input password on login to the encrypted password
User.prototype.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, res) {
    if (err) { return callback(err) }

    callback(null, res);
  })
}

// User.hasMany(Cart)

module.exports = User;