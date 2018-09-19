const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetbank.js');
router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets });
});
// router.get('/stylesheets/styles.css', function(req, res) {
//   res.sendFile(
//     '/home/oriana/Code/newBootcamp/twitter-js/public/stylesheets/styles.css',
//   );
// });
module.exports = router;
