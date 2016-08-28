var request = require('request');

function stock(req,res){

  request('http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=' + req.body.symbol + '&callback=myFunction', function(error, response, body) {
    var seperate = body.replace('})', '}').split('myFunction(');
    var result = JSON.parse(seperate[1]);
    console.log(req.body,'$$$$')
    res.json({ symbol: req.body.symbol, open: result.Open, high: result.High, low: result.Low, price: result.LastPrice});
  })
}

module.exports = {stock};
