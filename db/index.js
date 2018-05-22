'use strict';

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/dnaid');

module.exports = db;