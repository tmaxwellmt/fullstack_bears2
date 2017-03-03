var express = require('express');
var Bear = require('../models/Bears');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Running the express router');
  next();
});


router.route('/bears');
  get(function (req, res) {
    Bear.find(function (err, bearData) {
      if (err) {
        console.log("You Can't Code");
      } else {
        res.json(bearData);
      }
  });
})
.post(function (req, res) {
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
  });
});

router.route('./bears/:bear_id')
  .get(function (req, res) {
    var bear_id = req.params.bear_id;
    Bear.findById(bear_id, function (err, bearData) {
      if (err) {
        console.log("The bear with Id:" + bear_id + "was not there");
      } else {
        res.json(bearData);
      }
  });
})

.post(function (req, res) {
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
  })
});
