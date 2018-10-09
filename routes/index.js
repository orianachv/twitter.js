const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetbank.js');

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets, showForm: true });
});

router.get('/users/:name', function(req, res) {
  let name = req.params.name;
  let list = tweetBank.find({ name: name });
  res.render('index', { tweets: list, showForm: true, name: name });
});

router.get('/tweets/:id', function(req, res) {
  let id = Number(req.params.id);
  let list = tweetBank.find({ id: id });
  res.render('index', { tweets: list });
});

router.post('/tweets', bodyParser.urlencoded({ extended: false }), function(req,res,){
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
