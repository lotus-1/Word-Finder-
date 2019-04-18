// This is a function for testing
var pureFunction = function (x) {
  if (typeof x === 'string') {
    return x;
  }
}
// This is our function

var fs = require('fs');
const path = require('path');
const handlers = require('./handlers');
const router = (request, response) => {
  const url = request.url;
  if(url === '/') {
    handlers.handleHome(request, response);

  } else if (url.indexOf('/public/') !== -1) {
      handlers.handlePublic(request, response, url);

  }  else if (url === '/search'){
      handlers.autoComplete(str);
  }
  else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 not found</h1>');
  }
};


module.exports = {
  pureFunction,
  router
};
