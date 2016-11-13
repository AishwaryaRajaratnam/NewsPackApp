var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MovieDetailsSchema = new Schema({
  Title: String,

});

newsDb=mongoose.model('MovieDetails',MovieDetailsSchema);
module.exports = newsDb;
