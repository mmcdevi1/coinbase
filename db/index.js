'use strict';

const dbName = 'boilerplate';

const Sequelize = require('sequelize');
const db = new Sequelize(`postgres://localhost/${dbName}`);

module.exports = db;