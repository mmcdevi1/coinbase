const db = require('../db');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

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

  password: Sequelize.STRING,
  
  admin: { 
    type: Sequelize.BOOLEAN, 
    default: false 
  },
  
  researcher: { 
    type: Sequelize.BOOLEAN, 
    default: false 
  },
  
  contributor: { 
    type: Sequelize.BOOLEAN, 
    default: false 
  },

  otherTests: Sequelize.ARRAY(Sequelize.STRING),

  kitOrdered: { 
    type: Sequelize.BOOLEAN, 
    default: false 
  },

  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
})

User.beforeCreate((user, options) => {
  bcrypt.genSalt(10, function (err, salt) {
    // if (err) { return next(err) }

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      // if (err) { return next(err) }

      user.password = hash;
      // next();
    })
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

module.exports = User;