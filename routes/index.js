var express = require('express');
const app = require('../app.js');
var router = express.Router();
var router = express.Router();
var organisateur = require("./added_data.json");

directery = __dirname.replace('/routes', '')
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render("home",{data:organisateur});
  
});



module.exports = router;
