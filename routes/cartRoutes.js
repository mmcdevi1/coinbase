const express = require('express');
const router = express.Router();
const passportService = require('../services/passport');
const passport = require('passport');
const CartController = require('../controllers/cartController');
const CartItemController = require('../controllers/cartItemsController');
const authenticateUser = passport.authenticate('jwt', { session: false });

// Require Cart Model
const Cart = require('../models/Cart');

// Cart create POST route
router.post('/cart/new', authenticateUser, CartController.new);

// Cart GET route
router.get('/cart',      authenticateUser, CartController.show);


router.post('/cart/:id/item', authenticateUser, CartItemController.new)









module.exports = router;