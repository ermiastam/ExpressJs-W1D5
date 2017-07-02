var express = require('express');
var fetch = require('node-fetch');

var router = express.Router();

/* GET home page. */
 
router.get('/', function(req, res, next) {
  async function getJson(){
      try{
          let val = await fetch('http://jsonplaceholder.typicode.com/users/');
          return val;

      }
      catch(error){
          console.log(error.message)
      }
  }
  getJson().then(data=>data.json()).then((data)=>res.render('information', {information:data})).catch((err)=>err)});

module.exports = router;
