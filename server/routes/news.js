var express = require('express');
var newsModel= require('../models/newsModel')
var router = express.Router();

/* GET users listing. */
router.get('/news', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
