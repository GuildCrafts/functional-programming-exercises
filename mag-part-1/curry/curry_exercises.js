require('../support')
var _ = require('ramda')


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

// Original function
// var words = function(str) {
//   return split(' ', str)
// }

var words = _.split(' ')

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = _.map(words)


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

// Original
// var filterQs = function(xs) {
//   return filter(function(x){ return match(/q/i, x)  }, xs)
// }

var filterQs = _.filter((x) => _.match(/q/i, x))


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function (x, y) {
  return x >= y ? x : y
}

// REFACTOR THIS ONE:
// var max = function(xs) {
//   return reduce(function(acc, x){
//     return _keepHighest(acc, x)
//   }, -Infinity, xs)
// }

var max = _.reduce(_keepHighest, -Infinity)


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = _.curry((start, num, arr) => arr.slice(start, num))


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
// Use slice to define a function "take" that returns n elements from the beginning of an array. Make it curried.
// For ['a', 'b', 'c'] with n=2 it should return ['a', 'b'].
var take = _.curry((n, arr) => arr.slice(0, n))


module.exports = {
  words: words,
  sentences: sentences,
  filterQs: filterQs,
  max: max,
  slice: slice,
  take: take
}