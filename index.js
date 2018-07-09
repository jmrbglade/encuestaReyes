var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000;

var userdb = [];
var passdb = [];

userdb.push("admin");
passdb.push("admin");

app.post('/', function (req, res) {
  var user = req.param('user');
  res.send('POST');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
