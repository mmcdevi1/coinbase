const db = require('../db');
const User = require('./User');
const Cart = require('./Cart');
const CartItem = require('./CartItem');
const Order = require('./Order');

User.hasMany(Cart);
Cart.belongsTo(User);

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

User.hasMany(CartItem);
CartItem.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(CartItem);
CartItem.belongsTo(Order);

module.exports = {
  db,
  User,
  Cart,
  CartItem,
  Order,
};