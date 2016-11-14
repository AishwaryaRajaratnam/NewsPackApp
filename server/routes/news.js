var express = require('express');
var News= require('../models/news')
var router = express.Router();

router.route("/")
.get(function(req, res){

  // var movieVar = new Movie();
  //  movieVar.imdbID = req.params.movieId;
    News.find({}, function(err,allnews){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("All news in MongoDB fetched res ");
        res.send(allnews);
      }
    })

});


router.route("/add")
.post(function(req, res){
  if(req.body){
    var newsVar = new News(req.body);

    newsVar.save(function(err){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("News inserted in Mongo");
        res.send("News added successfully");
      }
    })
  }
});

module.exports = router;
