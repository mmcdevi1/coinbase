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
router.post(
	'/cart/new',
	authenticateUser, 
	CartController.new
);

// Cart GET route
router.get(
	'/cart',
	authenticateUser, 
	CartController.show
);

// Cart Item POST route 
router.post(
	'/cart/item',
	authenticateUser, 
	CartItemController.new
)

// Cart Item PUT route 
router.put(
	'/cart/item',
	authenticateUser, 
	CartItemController.update
)

// Cart Item GET all route
router.get(
	'/cart/:id/items',
	authenticateUser, 
	CartItemController.all
)

// Cart Item DELETE route
router.delete(
	'/cart/:id/item/:itemId', 
	authenticateUser, 
	CartItemController.destroy
)

module.exports = router;