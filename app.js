var express = require('express');
var app = express();

console.log('beep');

app.get('/', function(req, res){
  res.send('<h1>Beep</h1><p>Hello Werld...!!_<br />:)--</p>');
});

app.listen(process.env.PORT);
console.log('Listening on port '+process.env.PORT);