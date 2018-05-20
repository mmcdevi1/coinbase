const db = require('../db');
const Sequelize = require('sequelize');
const CartItem = require('./CartItem')

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

Order.afterCreate((order, options) => {
	const { userId, id } = order;

	CartItem.updateOrderId(userId, id)
})

module.exports = Order;