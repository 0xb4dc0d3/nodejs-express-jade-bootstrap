var express = require('express');
var router = express.Router();

/* GET home page. */
//We dont put /about, we are in about so .. isnt necessary
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
