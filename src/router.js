// This is a function for testing
var pureFunction = function (x) {
  if (typeof x === 'string') {
    return x;
  }
}
var handler = require('./handlers');
// This is our function

var fs = require('fs');
var arrWords = [];

var autoComplete = function(str) {
  var fileName = path.join(__dirname + "/.." + "/words.txt");
  // var fileName = require('./word-list');
  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) {
      console.log(error);
    } else {
      arrWords.words = data.split('\n');
      console.log(arrWords);
    }
  });

var newArrWords = arrWords.filter((el) => {
  if(arrWords[el].startsWith('Pe')) {
    return arrWords.join("\n");
  }
})
return newArrWords;
}


module.exports = pureFunction;
