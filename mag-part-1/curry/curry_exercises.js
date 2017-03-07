require('../support');
var _ = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

var words = _.split(' ')

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = _.map(words)

// sentences(["Jingle bells Batman smells", "Robin laid an egg"])


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

// var filterQs = function(xs) {
//   return filter(function(x){ return match(/q/i, x);  }, xs);
// };

var filterQs = _.filter( match(/q/i) )


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };


var max = _.reduce(function(acc, x){
  return _keepHighest(acc, x);
}, -Infinity)


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = _.slice()



// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
var take = _.slice(0)
//
//
module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
