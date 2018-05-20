const db = require('../db');
const Sequelize = require('sequelize');
const User = require('./User')

// Order Schema Setup
const CartItem = db.define('cartItem', {
	productId: Sequelize.INTEGER,
	amount: Sequelize.INTEGER
});

CartItem.updateOrderId = (userId, orderId) => {
	CartItem
		.findAll({
			where: {
				userId
			}
		})
		.then(items => {
			items.forEach(item => {
				item.update({ orderId })
			})
		})
		.catch(err => {
			console.log(err)
		})
}

module.exports = CartItem;