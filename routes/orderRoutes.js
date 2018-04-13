const express = require('express');
const router = express.Router();
const passportService = require('../services/passport');
const passport = require('passport');

// Require Order Model
const Order = require('../models/Order');
const User = require('../models/User');

// Const
const requireLogin     = passport.authenticate('local', { session: false });
const authenticateUser = passport.authenticate('jwt', { session: false }); // T

// Order create POST route
router.post('/api/order/new', authenticateUser, (req, res, next) => {
  const order = {
    _user: req.user.id,
    address: {
      street: '50 e sunnsydie lane',
      city: 'irvington',
      state: 'ny',
      zipcode: '10533'
    }
  }

  Order.create(order, (err, order) => {
    if (err) { return next(err) }
    res.send( {order: order, user: order._user} )
  })
})

router.get('/a/orders', authenticateUser, (req, res) => {
  // Order.find({ _user: req.user.id }, (err, order) => {
  //   res.send(order)
  // })
  Order.findOne({ address: {city: 'irvington'} })
})

module.exports = router;