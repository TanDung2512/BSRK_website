var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {name : "/"});
});

router.get('/about', function(req, res, next) {
  res.render('about', {name : "about"});
});

router.get('/courses', function(req, res, next) {
  res.render('courses', {name : "courses"});
});

router.get('/career', function(req, res, next) {
  res.render('career', {name : "career"});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {name : "contact"});
});

router.get('/news', function(req, res, next) {
  res.render('news', {name : "news"});
});


router.get('/news/1', function(req, res, next) {
  res.render('news_single', {name : "news_single"});
});

module.exports = router;
