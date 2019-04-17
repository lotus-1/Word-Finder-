var fs = require('fs');
var path = require('path');

var handleHome = function(request, response) {
  var filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, function(error, file) {
    if (error) {
      console.log(error);
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>Sorry, there was an error on our site...</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
}

var handlePublic = function(request, response, url) {
  var extention = url.split('.')[1];
  var extentionTypes = {
    html: 'text/html',
    js: 'application/javascript',
    css: 'text/css'
  };
  var filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, function(error, file) {
    if (error) {
      console.log(error);
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end('<h1>Soooo sorry... I can\'t find this file...</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': extentionTypes[extention] })
      response.end(file);
    }
  });
};

module.exports = {
  handleHome,
  handlePublic
}
