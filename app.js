const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const routes = require('./routes');

app.use('/', routes);
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

nunjucks.configure('views', { noCache: true });
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.listen(3001, function() {
  console.log('esta escuchando en el puerto 3001');
});
