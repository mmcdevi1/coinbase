const Cart = require('../models/Cart');
const User = require('../models/User');

exports.new = (req, res, next) => {
	Cart
		.create({ userId: req.user.id })
		.then(cart => {
			res.send(cart)
		})
		.catch(err => {
			next(err)
		})
}

exports.show = (req, res, next) => {
	Cart
		.findById( parseInt(req.query.id) )
		.then(cart => {
			res.send(cart)
		})
		.catch(err => {
			next(err)
		})
}