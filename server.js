var express = require('express');
var bodyParser = require('body-parser');

var Bear = require('./models/bears2');
var app = express();

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/animals");

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

app.post('/api/bears', function(req, res) {
  var bear = new Bear();
  bear.species = req.body.species;
  bear.age = req.body.age;
  bear.name = req.body.name;
  bear.weight = req.body.weight;
  bear.location = req.body.location;
  bear.attitude = req.body.attitude;
  bear.save(function (err, bearData) {
    if(err){
      console.log(err, "Error with your bearer");
    } else {
      res.json(bearData);
    }
  })
});

app.listen(3000);

console.log('server starts');
