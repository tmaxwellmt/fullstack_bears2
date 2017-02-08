var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

app.get('/', function (req, res){
  res.send("hello World!! please to meet you");
});

app.get('/api/greeting', function (req, res) {
  res.send("Hello. Welcome");
});

app.post('/api/greeting', function(req, res) {
  var name = req.body.name;
  var greeting = req.body.greeting;
  res.json({name: name, greeting: greeting});
});

app.get('/api/greeting/:name', function (req, res) {
  res.send("Hello, "+ req.params.name);
});

app.listen(3000);

console.log('server starts');
