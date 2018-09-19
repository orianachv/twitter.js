const express = require('express');
const app = express();

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use('/special*', function(req, res, next) {
  console.log('llegue aca');
  next();
});

app.listen(3001, function() {
  console.log('esta escuchando en el puerto 3001');
});
