var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    var num1= (Math.random() * 10)
    var num2= (Math.random() * 10)
    var num3=(Math.random() * 10)
   

    
    var imul = Math.imul(num1)
    var log = Math.log(num2)
    var log10 = Math.log10(num3)
    res.render('computation', { title: 'Jayachandra Narala Computing functions',
    num1:num1,
    num2:num2,
    num3:num3,
    imul:imul,
    log:log,
    log10:log10
  
  });
  });
  
  module.exports = router;
  