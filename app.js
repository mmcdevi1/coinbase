const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');

// Require Models
require('./models/User'); // USER MODEL
require('./models/Order'); // ORDER MODEL

// Require Routes
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Connect MongoDB with mLab.com in Development
mongoose.connect(keys.mongoURI);

// Declare app
const app = express();

// Setup Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Use Routes
app.use(orderRoutes);
app.use(authRoutes);


// Listen on port 5000 in Development
const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on port ${PORT}`);
});