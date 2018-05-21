const db = require('../db');
const Sequelize = require('sequelize');
const User = require('./User')

// Order Schema Setup
const Cart = db.define('cart', {

});

Cart.destroyAfterOrder = () => {
	// Cart.find
}

module.exports = Cart;