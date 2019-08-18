var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/bereal-doreal-havereal', function(req, res, next) {
  res.render('courses/bereal_doreal_havereal',{name : "courses"});
});

router.get('/mctlmtt', function(req, res, next) {
    res.render('courses/mctlmtt',{name : "courses"});
  });

  router.get('/danh-thuc-thien-tai-tai-chinh', function(req, res, next) {
    res.render('courses/dttttc',{name : "courses"});
  });

module.exports = router;
