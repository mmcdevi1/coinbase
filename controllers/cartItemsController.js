const CartItem = require('../models/CartItem');
const Cart = require('../models/Cart');
const User = require('../models/User');

exports.new = (req, res, next) => {
	CartItem
		.findOrCreate({
			where: {
				userId: req.user.id,
				productId: req.body.productId,
				cartId: req.body.cartId
			}
		})
		.then(item => {
			res.send(item)
		})
		.catch(err => {
			next(err)
		})
}

exports.update = (req, res, next) => {
	CartItem
		.findById(req.body.cartItemId)
		.then(item => {
			item.update(req.body)
		})
		.catch(err => {
			next(err)
		})
}

exports.all = (req, res, next) => {
	CartItem
		.findAll({
			where: {
				cartId: req.params.id
			}
		})
		.then(items => {
			res.send(items)
		})
		.catch(err => {
			next(err)
		})
}

exports.destroy = (req, res, next) => {
	CartItem
		.destroy({
			where: {
				id: req.params.itemId
			}
		})
		.then(item => {
			res.status(204).end()
		})
		.catch(err => {
			next(err)
		})
}