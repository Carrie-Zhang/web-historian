var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, asset, callback) {
  console.log('asset', asset)
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  // fs.readFile('/web/public/index.html', (err, data) => {
  //   if (err) { throw err; }
  //   console.log('test1: ', data);
  // });
  
  // fs.writeFile('/archives/sites.txt', data, function(err) {
  //   if (err) { return console.log(err); }
  //   console.log('test2: ', data);
  // });
};



// As you progress, keep thinking about what helper functions you can put here!
