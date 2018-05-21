const db = require('../db');
const Sequelize = require('sequelize');
const Cart = require('./Cart');
const CartItem = require('./CartItem');
const OrderItem = require('./OrderItem')

// Order Schema Setup
const Order = db.define('order', {
  orderStatus: Sequelize.STRING,
  subTotal:    Sequelize.INTEGER,
  ccName:      Sequelize.STRING,
  ccNumber:    Sequelize.STRING,
  expiryMo:    Sequelize.STRING,
  expiryYr:    Sequelize.STRING,
  ccCvv:       Sequelize.STRING,
});

Order.afterCreate(async (order, options) => {
	const { userId, id } = order;

	const cartItems = await CartItem.findAll({ where: { userId } })

	cartItems.forEach(item => {
		const { productId } = item;

		OrderItem.createAfterOrder({ productId, orderId: id, userId })
	})

	Cart.destroy({ where: { userId } })
})

module.exports = Order;