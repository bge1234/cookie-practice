var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie("views", (parseInt(req.cookies.views) || 0) + 1);
  res.render('index', { title: 'Express', views: req.cookies.views });
});

router.get('/reset', function(req, res, next) {
  res.clearCookie("views");
  res.render('index', { title: 'Express' });
});

module.exports = router;
