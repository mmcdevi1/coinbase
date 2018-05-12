const mongoose = require('mongoose');

// Order Schema Setup
const CartItemSchema = new mongoose.Schema({
  _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  _cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
  productId: Number
});

module.exports = mongoose.model('CartItem', CartItemSchema);