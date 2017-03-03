var express = require('express');
var bodyParser = require('body-parser');

var Bear = require('./models/bears2');
var app = express();

var bearRouter =require('./routes/bears');

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/animals");

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

app.use(express.static('public'));

app.set('view engine', 'ejs');

var me = { name: "Tyler", email: "tmaxwellmt@gmail.com" };

app.get('/', function (req, res) {
  res.render('index', { welcome: "Hello, Please to Meet you" });
});

app.get('/loop', function (req, res) {
  res.render('loop', { welcome: "Hello, Please to Meet you", num:50 });
});

app.get('/bears',function (req, res) {
  Bear.find(function (err, bears) {
    if (err) {
      console.log("You Can't Code");
    } else {
      res.render('bears', {welcome: "List of Bears", bears: bears});
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

app.use('/api', bearRouter);

app.listen(3000);

console.log('server starts');
