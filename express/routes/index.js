var express = require('express');
var hbs = require('express-hbs');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var quotes = [
    {
      text: 'How lucky I am to have something that makes saying goodbye so hard.',
      src: 'Winnie the Pooh'
    }
  ];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];

  res.render('index', {
    title: 'Random Quotes',
    quote: quote,
  });
});

module.exports = router;
