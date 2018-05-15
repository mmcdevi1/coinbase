const CartItem = require('../models/CartItem');
const Cart = require('../models/Cart');
const User = require('../models/User');

exports.new = (req, res, next) => {
	CartItem
		.create({
			userId: req.user.id,
			cartId: req.params.id,
		})
}