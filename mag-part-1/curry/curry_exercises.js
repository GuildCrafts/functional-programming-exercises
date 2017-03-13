require('../support');
var _ = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

// var words = function(str) {
//   return _.split(' ', str);
// };

function splitHere(separator,str) {
  return split(separator, str);
}

var words = _.partial(splitHere, ' ')

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = (arrayOfStrings) => {
  return arrayOfStrings.map( function (element) {
    return element.split(' ')
  })
}

// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

//var filterQs = function(xs) {
//   return _.filter(function(x) {
//     return match(/q/i, x);
//   }, xs);
// };

function boobooFunction (xs) {
  return filter(function(x){ return match(/q/i, x);  }, xs);
};

var filterQs = _.partial(boobooFunction)

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
// var max = function(xs) {
//   return reduce(function(acc, x){
//     return _keepHighest(acc, x);
//   }, -Infinity, xs);
// };

var pMax = function(xs) {
  return reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, -Infinity, xs)
}

var max = _.partial(pMax)

// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
function sliceWrap (start, end, array) {
  return array.slice(start, end)
}

var slice = _.curry(sliceWrap);

// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
function iDoWhatIWant (amount, array) {
  return array.slice(0, amount)
}
var take = _.curry(iDoWhatIWant);


module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
