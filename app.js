const express = require('express');
const path = require('path');
var app = express();

app.use('/www', express.static('www'));
app.use('/static', express.static('static'));
app.use('/dist', express.static('dist'));

app.get('/jsonp.js', function (req, resp) {
  resp.sendFile(path.join(__dirname,'./jsonp.js'));
})
app.get('/', function (req, resp) {
  resp.redirect('./www/index.html');
})

app.listen(3335, function () {
  console.log('listen http://localhost:' + 3335);
});

