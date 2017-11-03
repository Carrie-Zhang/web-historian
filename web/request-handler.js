var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');// require more modules/folders here!
var fs = require('fs');

var statuscode = 200; 

exports.handleRequest = function (req, res) {
  if (req.method === 'GET') {
    fs.readFile(archive.paths.siteAssets + '/index.html', (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data.toString());
    });
  }
  
  if (req.method === 'POST') {
    var body = [];
    req.on('data', chunk => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      var url = body.slice(4).toString();
      
      archive.isUrlInList(url, (isInList) => {
        console.log('newURL', url);
        if (!isInList) {
          archive.addUrlToList(url, () => {
            //console.log('added to list', url);
          });

          fs.readFile(archive.paths.siteAssets + '/loading.html', (err, data) => {
            if (err) { throw err; }
      
            res.writeHead(302, httpHelpers.headers);
            res.end(data, 'utf8');
          });
        } else {
          console.log('archived', url);
          fs.readFile(archive.paths.archivedSites + '/' + url, (err, data) => {
            if (err) {
              throw err;
            }
            res.writeHead(200, httpHelpers.headers);
            res.end(data, 'utf8');
          });
        }
      });
    });
  }
};
  



