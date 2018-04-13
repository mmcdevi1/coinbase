const Order = require('../models/Order');

exports.new = (req, res, next) => {
  const { address: { street, city, state, zipcode } } = req.body;

  // Require email, password and username
  if (!street || !city || !state) {
    return res.status(422).send({ error: 'Address are required!' })
  }

  const order = {
    _user: req.user.id,
    address: {
      street: street,
      city: city,
      state: state,
      zipcode: zipcode
    },
    createdAt: Date.now(),
    updatedAt: Date.now()
  }

  Order.create(order, (err, order) => {
    if (err) { return next(err) }

    res.send( {order: order} )
  })
}