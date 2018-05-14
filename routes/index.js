const express = require('express');
const router  = express.Router();
const Cart = require('../models/Cart');

router.get('/poop', (req, res) => {
	Cart.findById(1).then(user => res.send(user))
})

module.exports = router;
