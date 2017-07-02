
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    fetch('http://jsonplaceholder.typicode.com/users/')
        .then(data=>data.json())
        .then(data=>res.render('information', {information: data}));
});

module.exports = router;

