var express = require('express');
var router = express.Router();
const package = require('/home/mrfonebox/mkhorizon/package.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('(${package.description} - ${package.version})');
  
});



module.exports = router;
