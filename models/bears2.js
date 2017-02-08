var mongoose = require('mongoose'); // imports mongoose package
var Schema = mongoose.Schema;

var BearSchema = new Schema({
  species: String,
  age: Number,
  name: String,
  weight: Number,
  location: String,
  attitude: String,
});

module.exports = mongoose.model('Bear', BearSchema);
