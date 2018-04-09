const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');

// Require Models
require('./models/User'); // USER MODEL

// Require Routes
const authRoutes = require('./routes/authRoutes');

// Connect MongoDB with mLab.com in Development
mongoose.connect(keys.mongoURI);

// Declare app
const app = express();

// Setup Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Use Routes
app.use(authRoutes);

// Listen on port 5000 in Development
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});