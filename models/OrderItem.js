const db = require('../db');
const Sequelize = require('sequelize');
const User = require('./User')

// Order Schema Setup
const OrderItem = db.define('orderItem', {
	productId: Sequelize.INTEGER,
	amount: Sequelize.INTEGER,
});

OrderItem.createAfterOrder = (options) => {
	OrderItem
		.create(options)
		.then(item => {
			console.log(item)
		})
		.catch(err => {
			console.log(err)
		})
}

module.exports = OrderItem;