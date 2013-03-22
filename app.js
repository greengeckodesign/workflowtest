var express = require('express');
var app = express();

console.log('beep');

app.get('/', function(req, res){
  res.send('Hello Werld.');
});

app.listen(process.env.PORT);
console.log('Listening on port '+process.env.PORT);