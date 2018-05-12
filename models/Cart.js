const mongoose = require('mongoose');

// Order Schema Setup
const CartSchema = new mongoose.Schema({
  _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Cart', CartSchema);