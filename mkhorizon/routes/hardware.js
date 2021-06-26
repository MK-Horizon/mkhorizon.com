var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("/home/mrfonebox/mkhorizon/views/hardware");
  
});



module.exports = router;
