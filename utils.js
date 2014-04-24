//var http = require('http');
var https = require('https')
  , config = require('./config');

function getProtectedResource (path, accessToken, done) {

  var options = {
    host: config.host,
    path: path,
    port: config.port,
    headers: {'Authorization': 'Bearer ' + accessToken, 'Accept' : 'application/json'}
  };

  https.get(options, function (response) {
    var str = '';

    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      done(null, str);
    });

  }).on("error", function(e){
  	done(e);
  });
}

exports.getProtectedResource = getProtectedResource;
