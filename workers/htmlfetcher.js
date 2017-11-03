// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var helper = require('./../helpers/archive-helpers');
var http = require('http');

helper.readListOfUrls(helper.downloadUrls);
  