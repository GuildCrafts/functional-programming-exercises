require('../support');
var ramda = require('ramda');
var accounting = require('accounting');

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
// use ramda.compose() to rewrite the function below. Hint: ramda.prop() is curried.
var isLastInStock = ramda.compose(ramda.prop('in_stock'), ramda.last);

// Exercise 2:
// ============
// use ramda.compose(), ramda.prop() and ramda.head() to retrieve the name of the first car
var nameOfFirstCar = ramda.compose(ramda.prop('name'), ramda.head);


// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition
var _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; // <- leave be

var averageDollarValue = ramda.compose(_average, ramda.map(ramda.prop('dollar_value')));



// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that takes an array of cars and returns a list of lowercase and underscored names: e.g: sanitizeNames([{name: "Ferrari FF"}]) //=> ["ferrari_ff"].

var _underscore = replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

var sanitizeNames = ramda.map(ramda.compose(_underscore, toLowerCase, ramda.prop('name')));


// Bonus 1:
// ============
// Refactor availablePrices with compose.
var formatPrice = ramda.compose(accounting.formatMoney, ramda.prop('dollar_value'));
var availablePrices =  ramda.compose(join(', '), ramda.map(formatPrice), ramda.filter(ramda.prop('in_stock')));

// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use ramda.flip()

var append = ramda.flip(ramda.concat);
var fastestCar = ramda.compose(append(' is the fastest'),
                           ramda.prop('name'),
                           ramda.last,
                           ramda.sortBy(ramda.prop('horsepower')));

module.exports = { CARS: CARS,
                   isLastInStock: isLastInStock,
                   nameOfFirstCar: nameOfFirstCar,
                   fastestCar: fastestCar,
                   averageDollarValue: averageDollarValue,
                   availablePrices: availablePrices,
                   sanitizeNames: sanitizeNames
                 };
