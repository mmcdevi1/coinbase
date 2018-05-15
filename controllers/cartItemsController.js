const CartItem = require('../models/CartItem');
const Cart = require('../models/Cart');
const User = require('../models/User');

exports.new = (req, res, next) => {
	CartItem
		.create({
			userId: req.user.id,
			productId: req.body.productId,
			cartId: req.body.cartId
		})
		.then(item => {
			res.send(item)
		})
		.catch(err => {
			next(err)
		})
}

exports.all = (req, res, next) => {
	console.log(req.query)
	CartItem
		.findAll({
			where: {
				cartId: req.query.cartId
			}
		})
		.then(items => {
			res.send(items)
		})
		.catch(err => {
			next(err)
		})
}