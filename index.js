var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000;

var userdb = [];
var passdb = [];

userdb.push("admin");
passdb.push("admin");

app.post('/', function (req, res, next) {
  var us = req.body.user;
  res.send('POST RESULT: ' + us);
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

