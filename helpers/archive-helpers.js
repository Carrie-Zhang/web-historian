var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var http = require('http');
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  
  fs.readFile(exports.paths.list, function(err, data) {
    //var newArray = [];// if (err) { throw err; }
    console.log('data', data.toString());
    data = data.toString().split('\n');
    // newArray.push(data);
    callback(data);
  });
};

exports.isUrlInList = function(url, callback) {
  // callback = function(err, url) {
  fs.readFile(exports.paths.list, function (err, data) {
    // if (data.includes(url)) {
    //   callback(true);
    // } else {
    //   callback(false);
    // }
    callback(data.includes(url));
  });
};

exports.addUrlToList = function(url, callback) {
  fs.writeFile(exports.paths.list, url, function(err) {
    //console.log('url', url);
    callback(url);
  });
};

exports.isUrlArchived = function(url, callback) {
  fs.readdir(exports.paths.archivedSites, function (err, files) {
    // if ((files.includes(url))) {
    //   callback(true);
    // } else {
    //   callback(false);
    // }
    callback(files.includes(url));
  });
};

exports.downloadUrls = function(urls) {
  // console.log('urls: ', typeof urls);
  // console.log('urls: ', urls);
  urls.forEach(function(url) {
    if (exports.isUrlInList(callback(url))) {
      // if (!exports.isUrlArchived(url, callback(url)) {
      //   var options = {
      //     host: url,
      //     //port: 80,
      //     // path: '/upload',
      //     path: '/',
      //     method: 'GET'
      //   };

      //   var req = http.request(options, function(res) {
      //     console.log('STATUS: ' + res.statusCode);
      //     console.log('HEADERS: ' + JSON.stringify(res.headers));
      //     res.setEncoding('utf8');
      //     res.on('data', function (chunk) {
      //       console.log('BODY: ' + chunk);
      //     });
      //   });

      //   // write data to request body
      //   req.write('data\n');
      //   req.write('data\n');
      //   req.end();
      // }
    } else {
      exports.addUrlToList(url);
    }
  });
  
  urls.forEach(function(url) {
    fs.writeFile(exports.paths.archivedSites + '/' + url, 'something', function(err) {
    });
  });
};
