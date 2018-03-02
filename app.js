const express = require('express');
const app = express();

const routes = require('./routes');

app.use('/static', express.static('public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Set view engine with Pug
app.set('view engine', 'pug');

// Set up routes
app.use(routes);

// app.use(function (req, res, next) {
//   const err = new Error('Page not found');
//   err.status = 404;
//   next(err);
// })

// Listen on port 3000
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Listening to port ${port} ..`)
})