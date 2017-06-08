var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/yanzheng', function(req, res, next) {
  res.render('yanzheng', { title: 'Express' });
});

router.post('/yanzheng',function (req,res) {
  console.log(req.body.userName);
})


router.get('/denglu', function(req, res, next) {
  res.render('denglu', { title: 'Express' });
});

router.post('/denglu',function (req,res) {
  console.log(req.body.userName);
})


router.get('/liebiao', function(req, res, next) {
  res.render('liebiao', { title: 'Express' });
});

router.post('/liebiao',function (req,res) {
  console.log(req.body.userName);
})


router.get('/xiugai', function(req, res, next) {
  res.render('xiugai', { title: 'Express' });
});

router.post('/xiugai',function (req,res) {
  console.log(req.body.userName);
})


router.get('/zhaohuimima', function(req, res, next) {
  res.render('zhaohuimima', { title: 'Express' });
});

router.post('/zhaohuimima',function (req,res) {
  console.log(req.body.userName);
})


router.get('/zhuce1', function(req, res, next) {
  res.render('zhuce1', { title: 'Express' });
});

router.post('/zhuce1',function (req,res) {
  console.log(req.body.userName);
})


router.get('/zhuce2', function(req, res, next) {
  res.render('zhuce2', { title: 'Express' });
});

router.post('/zhuce2',function (req,res) {
  console.log(req.body.userName);
})

module.exports = router;
