// DOM section
var queryString = require('query-string');
var fs = require('fs');
var path = require('path');
var wordsList = path.readFile(__dirname, '..', 'words.txt')
var box = document.getElementById('box');
box.addEventListener("Keyboard", function(event){
  event.preventDefault();

  fetch('/search')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

  });
  .catch(function(error) {
    console.log('Request failed', error);
  });
}
