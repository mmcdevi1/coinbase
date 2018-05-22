const db = require('../db');
const User = require('./User');
const Cart = require('./Cart');
const CartItem = require('./CartItem');
const Order = require('./Order');
const OrderItem = require('./OrderItem');

User.hasMany(Cart);
Cart.belongsTo(User);

// Destroy cart and all its cart items
Cart.hasMany(CartItem, {
  onDelete: 'cascade',
  hooks: true
});
CartItem.belongsTo(Cart);

User.hasMany(CartItem);
CartItem.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

User.hasMany(OrderItem);
OrderItem.belongsTo(User);

module.exports = {
  db,
  User,
  Cart,
  CartItem,
  Order,
  OrderItem,
};