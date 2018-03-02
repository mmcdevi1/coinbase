const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 5000
const routes  = express.Router();

routes.get('/', function (req, res) {
  res.render('index')
})

module.exports = routes;
