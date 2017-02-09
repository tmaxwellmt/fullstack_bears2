var express = require('express');
var bodyParser = require('body-parser');

var Bear = require('./models/bears2');
var app = express();

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/animals");

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

app.set('view engine', 'ejs');

var me = { name: "Tyler", email: "tmaxwellmt@gmail.com" };

app.get('/about', function (req, res) {
  res.send('about', { data: me });
})

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

app.get('/api/bears', function (req, res) {
  Bear.find(function (err, bearData) {
    if (err) {
      console.log("You Can't Code");
    } else {
      res.json(bearData);
    }
  });
});

app.get('/api/bears/:bear_id', function (req, res) {
  var bear_id = req.params.bear_id;
  Bear.findById(bear_id, function (err, bearData) {
    if (err) {
      console.log("The bear with Id:" + bear_id + "was not there");
    } else {
      res.json(bearData);
    }
  });
});

app.put('/api/bears/:bear_id', function (req, res) {
  var bear_id = req.params.bear_id;
  Bear.findById(bear_id, function (err, bearData) {
    if (err) {
      console.log("The bear with Id:" + bear_id + "was not there");
    } else {
      var bear = bearData;
      bear.name = req.body.name ? req.body.name : bear.name;
      bear.species = req.body.species ? req.body.species : bear.species;
      bear.weight = req.body.weight ? req.body.weight : bear.weight;
      bear.age = req.body.age ? req.body.age : bear.age;
      bear.location = req.body.location ? req.body.location : bear.location;
      bear.attitude = req.body.attitude ? req.body.attitude : bear.attitude;
      bear.save(function (err, bearData) {
        if(err){
          console.log(err);
        } else {
          res.json(bearData);
        }
      });
    }
  });
});

app.delete('/api/bears/:bear_id', function(req, res) {
  var bear_id = req.params.bear_id;
  Bear.remove({_id: bear_id}, function(err, bear) {
    if(err){
      console.log(err, "Could Not Delete Bear");
    } else {
      res.json({message: "Bear Deleted", data: bear});
    }
  });
});

app.listen(3000);

console.log('server starts');
