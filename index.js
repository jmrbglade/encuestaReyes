var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000;

var userdb = [];
var passdb = [];

userdb.push("admin");
passdb.push("admin");

app.all('/', function (req, res) {
  var user = req.query.user;
  var pass = req.query.pass;
  res.send('req ' + req);
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
