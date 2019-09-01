var express = require('express');
var router = express.Router();


const teachers = [
  {
    id : "huong-theresa",
    name : "Huong Theresa",
    img : "/assets/img/teacher/avatar_theresa.jpg",
    link : "/our-team/huong-theresa",
    bio : [{
      title : "Kinh nghiệm thực tế:",
      content : `This is my thirteenth year in Baltimore 
      City Schools and my first year at Baltimore Design School 
      as resident principal. I served as a social studies teacher 
      teaching Government, Intro. to Law, and Government Bridge and 
      also served as Teacher Lead where I supported teacher teams in planning.`,
    },
    {
      title : "Lý do gia nhập gia đình BS-RK:",
      content : "to continue my learning, and meet and interact with new students and staff.",
    },
    {
      title : "Fun fact: ",
      content : "I love watching sports and am a Miami Dolphins fan! I also enjoy watching game shows and playing with my kids.",
    }

    ]
  },
  { 
    id : "huong",
    name : "Huong Theresa",
    img : "/assets/img/teacher/avatar_theresa.jpg",
    link : "/our-team/huong-theresa",
  },
  {
    id : "huong",
    name : "Huong Theresa",
    img : "/assets/img/teacher/avatar_theresa.jpg",
    link : "/our-team/huong-theresa",
  },
  {
    id : "huong",
    name : "Huong Theresa",
    img : "/assets/img/teacher/avatar_theresa.jpg",
    link : "/our-team/huong-theresa",
  },
  {
    id : "hu",
    name : "Huong Theresa",
    img : "/assets/img/teacher/avatar_theresa.jpg",
    link : "/our-team/huong-theresa",
  },
  {
    id : "huong-th",
    name : "Huong Theresa",
    img : "/assets/img/teacher/avatar_theresa.jpg",
    link : "/our-team/huong-theresa",
  }
]

const supportors = [
  {
    id : "hu",
    name : "Huong Theresa",
    img : "/assets/img/teacher/avatar_theresa.jpg",
    link : "/our-team/huong-theresa",
  },
  {
    id : "huong-t",
    name : "Huong Theresa",
    img : "/assets/img/teacher/avatar_theresa.jpg",
    link : "/our-team/huong-theresa",
  },
  {
    id : "huong-t",
    name : "Huong Theresa",
    img : "/assets/img/teacher/avatar_theresa.jpg",
    link : "/our-team/huong-theresa",
  },
  {
    id : "huon",
    name : "Huong Theresa",
    img : "/assets/img/teacher/avatar_theresa.jpg",
    link : "/our-team/huong-theresa",
  },
  {
    id : "huong-",
    name : "Huong Theresa",
    img : "/assets/img/teacher/avatar_theresa.jpg",
    link : "/our-team/huong-theresa",
  },
  {
    id : "huoa",
    name : "Huong Theresa",
    img : "/assets/img/teacher/avatar_theresa.jpg",
    link : "/our-team/huong-theresa",
  }
]
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {name : "/"});
});

router.get('/about', function(req, res, next) {
  res.render('about', {name : "about"});
});

router.get('/children-courses', function(req, res, next) {
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

router.get('/history', function(req, res, next) {
  res.render('history', {name : "news"});
});

router.get('/news/1', function(req, res, next) {
  res.render('news_single', {name : "news_single"});
});

router.get('/our-team', function(req, res, next) {
  res.render('ourteam', {name : "about", teachers , supportors});
});

router.get('/register', function(req, res, next) {
  res.render('register', {name : "about"});
});

router.get('/student-story', function(req, res, next) {
  res.render('student_story',{name : "about"});
});

router.get('/clubs', function(req, res, next) {
  res.render('clubs',{name : "about"});
});

router.get('/dorm', function(req, res, next) {
  res.render('dorm',{name : "about"});
});

router.get('/parent', function(req, res, next) {
  res.render('parent',{name : "about"});
});

router.get('/our-team/:name', function(req, res, next) {
  console.log(req.params.name)
  let bio = teachers.filter( teacher => req.params.name == teacher.id)
  if( bio.size == 0){
    res.render('bio_teacher', {name : "news_single", bio : [{title : "Not exit", content : ""}]});
  }
  else {
    res.render('bio_teacher', {name : "news_single", bio : bio[0].bio, image : bio[0].img });
  }
});

module.exports = router;
