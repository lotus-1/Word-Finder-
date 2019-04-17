var test = require('tape');
var pureFunction = require('./router');

test('Testing Tape', function(t) {
  t.equal(1, 1, 'Tape is working');
  t.end();
});

test('Testing if the pureFunction works', function(t) {
  var actual = pureFunction('jasmine');
  var expected = "jasmine";
  t.deepEqual(actual, expected, 'Return a string');
  t.end();
});
