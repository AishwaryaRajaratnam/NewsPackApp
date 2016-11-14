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

router.route("/remove/:newsId")
.delete(function(req, res){
  console.log("I am printing "+req.params.newsId);
  if(req.params.newsId){
    News.remove({newid:req.params.newsId},function(err){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("News deleted from Mongo");
        res.send("News deleted");
      }
    })
  }
});

router.route("/update")
.put(function(req, res){
  console.log("put req called " +req.body.newid+"    "+req.body.comments);
  if(req.body){

    News.update({ newid: req.body.newid }, { comments: req.body.comments },function(err){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("Updated the news")
        res.send("Updated news");
      }
    })
  }
});

module.exports = router;
