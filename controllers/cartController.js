const Cart = require('../models/Cart');

exports.new = (req, res, next) => {
	Cart.create({ _user: req.user.id }, function (err, cart) {
		if (err) { return next(err) }

		res.send({ cart })
	})
}

exports.show = (req, res, next) => {
	Cart.findOne({ _id: localStorage.getItem('cart') }, function (err, cart) {
		if (err) { return next(err) }

		
	})
}