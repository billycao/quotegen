var quotes = [
  {
    text: 'How lucky i am to have something that makes saying goodbye so hard.',
    attribution: 'Unknown'
  }
];

$(function() {
  var quote = quotes[Math.floor(Math.random() * quotes.length)];

  // $('#quote_txt').text(quote.text);
  // $('#quote_src').text(quote.attribution);
});
