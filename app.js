'use strict';

var fs = require('fs')
  , express = require('express')
  , app = express()
  , url = require('url')
  , gm = require('gm');

app.get('/', function  (req, res) {
  var query = req.query;
  // var query = urlParts.query;
  console.log(query);
  gm(query.url)
    .resize(query.w, query.h)
    .options({imageMagick: true})
    .noProfile()
    .write('busey.png', function (err) {
      if (!err) {
        console.log('done');
      } else{
        console.log(err);
      }
    });
  }
);

app.listen(3000);
console.log("Listening on 3000");
// localhost:3000?w=200&h=200&url=http://upload.wikimedia.org/wikipedia/commons/4/4f/Gary_Busey_2007.jpg