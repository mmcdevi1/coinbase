const db = require('../db');
const Sequelize = require('sequelize');
const User = require('./User')

// Order Schema Setup
const CartItem = db.define('cartItem', {
	productId: Sequelize.INTEGER,
	amount: Sequelize.INTEGER
});

module.exports = CartItem;