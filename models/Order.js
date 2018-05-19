const db = require('../db');
const Sequelize = require('sequelize');

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

module.exports = Order;