var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('bio', { 
      title: 'My Bio Page',
      name: 'Julius Sonko',
      address: '13608 Koen Ln, Fort Worth, TX 76155',
      color: 'Green',
      dob: '10/11/1970',
      phone: '214-226-8249',
      email: 'jsonko@my.edgetechacademy.edu' 
    });
});

module.exports = router;