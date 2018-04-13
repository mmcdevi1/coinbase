const express = require('express');
const router = express.Router();
const passportService = require('../services/passport');
const passport = require('passport');
const Orders = require('../controllers/ordersController');

// Require Order Model
const Order = require('../models/Order');
const User = require('../models/User');

// Const
const requireLogin     = passport.authenticate('local', { session: false });
const authenticateUser = passport.authenticate('jwt', { session: false }); // T

// Order create POST route
router.post('/api/order/new', authenticateUser, Orders.new);

router.get('/api/orders', authenticateUser, (req, res) => {
  Order.find({ _user: req.user.id }, (err, order) => {
    res.send(order)
  });
})

module.exports = router;