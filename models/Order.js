const mongoose = require('mongoose');

// Order Schema Setup
const OrderSchema = new mongoose.Schema({
  _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  address: {
    street:    String,
    city:      String,
    state:     String,
    zipcode:   String
  },
  orderStatus: String,
  subTotal:    Number,
  ccName:      String,
  ccNumber:    String,
  expiryMo:    String,
  expiryYr:    String,
  ccCvv:       String,
  createdAt:   Date,
  updatedAt:   Date,
});

module.exports = mongoose.model('Order', OrderSchema);