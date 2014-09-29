'use strict';

var fs = require('fs')
  , express = require('express')
  , app = express()
  , url = require('url');

app.get('/', function  (req, res) {
  var urlParts = url.parse(req.url, true);
  var query = urlParts.query;
  console.log(query.w);
  console.log(query.h);
  console.log(query.url)
  console.log(query);
});

app.listen(3000);
console.log("Listening on 3000");