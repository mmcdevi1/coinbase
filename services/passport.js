const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const keys = require('../config/keys');

const User = require('../models/User');

// Create Local Strategy
passport.use(new LocalStrategy(
  function (username, password, done) {
    // Verify username and password
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err) }
      if (!user) { return done(null, false) } 

      user.comparePassword(password, function (err, isMatch) {
        if (err) { return done(err) }
        if (!isMatch) { return done(null, false) }

        // If user exists and passwords match
        return done(null, user);
      })
    })
  }
));

// Create JSON Web Token (JWT) Strategy for authentication after login/register
passport.use(new JwtStrategy(
  {
    // Required by the JWT Strategy for Passport
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: keys.tokenKey
  },
  function (payload, done) {
    // Find User
    User.findById(payload.sub, function (err, user) {
      if (err) { return done(err, false) }

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  }
));