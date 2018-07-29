'use strict';

const dbName = 'coinbase';

const Sequelize = require('sequelize');
const db = new Sequelize(`postgres://localhost/${dbName}`);

module.exports = db;