var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');// require more modules/folders here!
var fs = require('fs');


exports.handleRequest = function (req, res) {
  if (req.method === 'GET') {
    fs.readFile(archive.paths.siteAssets + '/index.html', (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data.toString());
      console.log('data', data.toString());
    });
    
    // fs.readFile(archive.paths.archivedSites, (err, data) => {
    //   if (err) {
    //     throw err;
    //   }
    //   res.end(data.toString());
    //   console.log('jennnnn', data.toString());
    // });
    console.log(req.url);
  }
  
  // if (req.method === 'GET' && req.url === '/') {
    
  // }
  
  if (req.method === 'POST') {
    body = [];
    req.on('data', chunk => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      console.log('body', body);
      body = JSON.stringify(body);
      console.log('data', body);
    });
    console.log('hi', req.url);
    
  }
  
};


