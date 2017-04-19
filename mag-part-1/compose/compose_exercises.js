require('../support');
var _ = require('ramda');
var accounting = require('accounting');

// var trace = curry(function(tag, x) {
//   console.log(tag, x);
//   return x;
// });

// Example Data
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

// Original function
// var isLastInStock = function(cars) {
//   var reversed_cars = _.last(cars);
//   return _.prop('in_stock', reversed_cars)
// };

var isLastInStock = _.compose(_.prop('in_stock'),_.last)

// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car
var nameOfFirstCar = _.compose(_.prop('name'),_.head);


// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition
var _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; // <- leave be

// Original
// var averageDollarValue = function(cars) {
//   var dollar_values = map(function(c) { return c.dollar_value; }, cars);
//   return _average(dollar_values);
// };

var averageDollarValue = _.compose(_average, map(_.prop('dollar_value')))


// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that takes an array of cars and returns a list of lowercase and underscored names: e.g: sanitizeNames([{name: "Ferrari FF"}]) //=> ["ferrari_ff"].

var _underscore = replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

var sanitizeNames = _.compose(map(toLowerCase), map(_underscore), map(_.prop('name')));


// Bonus 1:
// ============
// Refactor availablePrices with compose.

// Original
// var availablePrices = function(cars) {
//   var available_cars = _.filter(_.prop('in_stock'), cars);
//   return available_cars.map(function(x){
//     return accounting.formatMoney(x.dollar_value)
//   }).join(', ');
// };

var availablePrices = _.compose(join(', '), accounting.formatMoney, map(_.prop('dollar_value')), _.filter(_.prop('in_stock')))

// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip()

// Original
// var fastestCar = function(cars) {
//   var sorted = _.sortBy(function(car){ return car.horsepower }, cars);
//   var fastest = _.last(sorted);
//   return fastest.name + ' is the fastest';
// };

// Solution
const fastestCar = _.compose(_.flip(_.concat)(' is the fastest'), _.prop(‘name’), _.last, _.sortBy(_.prop(‘horsepower’)))

//Alternate solution
// var fastestCar = _.compose(join(''), _.append(' is the fastest'), _.prop('name'), _.last, _.sortBy(_.prop('horsepower')))

module.exports = { CARS: CARS,
                   isLastInStock: isLastInStock,
                   nameOfFirstCar: nameOfFirstCar,
                   fastestCar: fastestCar,
                   averageDollarValue: averageDollarValue,
                   availablePrices: availablePrices,
                   sanitizeNames: sanitizeNames
                 };
