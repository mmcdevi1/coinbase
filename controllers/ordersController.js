const Order = require('../models/Order');

exports.new = (req, res, next) => {
  // const { address: { street, city, state, zipcode } } = req.body;

  // Require email, password and username
  // if (!street || !city || !state) {
  //   return res.status(422).send({ error: 'Address are required!' })
  // }

  Order
    .create(req.body)
    .then(order => {
      res.send(order)
    })
    .catch(err => {
      next(err)
    })
}