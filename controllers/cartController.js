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
	// User
	// 	.findById(1)
	// 	.then(cart => {
	// 		res.json(cart)
	// 	})
	// 	.catch(err => {
	// 		next(err)
	// 	})

	User.findOne({where: {id: req.user.id}}).then(user => res.send(user))
}