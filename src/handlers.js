var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, '..', 'words.txt');
var words = fs.readFileSync(filePath, 'utf-8');
var splitWords = function(text) {
  return text.split(/\n/).reduce(function(acc, val) {
    var arr = val.split(/\t/);
    acc[arr[0]] = arr.slice(1).join(" ");
    return acc;
  }, {});
}


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
  var extention = url.split('/')[1];
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

// var arrWords = [];
// // var box = document.getElementById('input');
// var autoComplete = function(str) {
//   var fileName = path.join(__dirname + "/.." + "/words.txt");
//   fs.readFile(filename, 'utf8', function (err, data) {
//     if (err) {
//       console.log(error);
//     } else {
//       arrWords.words = data.split('\n');
//       console.log(arrWords);
//     }
//   });
// var newArrWords = arrWords.filter((el) => {
//   if(arrWords[el].startsWith(box.value)) {
//     return arrWords.join("\n");
//   }
// })
// return newArrWords;
// }
var handlerSearch = function(request, response, url) {
  console.log(splitWords);
var result =  splitWords.filter(function(el) {
  return el[0] == "a";
});
console.log(result);
}
module.exports = {
  handleHome,
  handlePublic,
  handlerSearch
}
