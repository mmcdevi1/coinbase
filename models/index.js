const db = require('../db');
const User = require('./User');
const Cart = require('./Cart');
const CartItem = require('./CartItem');
const Order = require('./Order');

User.hasMany(Cart);
Cart.belongsTo(User);

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart)

User.hasMany(CartItem);
CartItem.belongsTo(User);

module.exports = {
  db,
  User,
  Cart,
  CartItem,
  Order,
};