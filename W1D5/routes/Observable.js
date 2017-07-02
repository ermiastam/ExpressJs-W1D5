var express = require('express');
var fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');
var router = express.Router();
const title1 = fetch('http://jsonplaceholder.typicode.com/users/');
/* GET home page. */
 var value = title1.then((data)=>{return data.json()}).catch((err)=>err);
router.get('/', function(req, res, next) {
  Rx.Observable.fromPromise(value).subscribe(data=>res.render('information', {information:data}));

  
});

module.exports = router;
