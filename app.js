const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const routes = require('./routes');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  console.log("METHOD: " + req.method, "URL: " + req.url);
  next();
});

app.listen(3001, function(){
  console.log('esta escuchando en el puerto 3001');
});

app.use('/', routes);