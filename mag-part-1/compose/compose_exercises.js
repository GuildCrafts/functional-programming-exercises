require('../support');
var _ = require('ramda');
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
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

var isLastInStock = _.compose(_.prop('in_stock'), _.last)

// var isLastInStock = function(cars) {
//   var reversed_cars = _.last(cars);
//   return _.prop('in_stock', reversed_cars)
// };

// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car

var nameOfFirstCar = _.compose(_.prop('name'), _.head);


// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition
var _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; // <- leave be

var averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')))

// var averageDollarValue = function(cars) {
//   var dollar_values = map(function(c) { return c.dollar_value; }, cars);
//   return _average(dollar_values);
// };


// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that takes an array of cars and returns a list of lowercase and underscored names: e.g: sanitizeNames([{name: "Ferrari FF"}]) //=> ["ferrari_ff"].

var _underscore = replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize
// var _underscore = function() { return replace(/\W+/g, '_')}

var sanitizeNames = _.map(_.compose(_underscore, toLowerCase, _.prop('name')))

// Bonus 1:
// ============
// Refactor availablePrices with compose.

// var availablePrices = ( _.prop('dollar_value') , _.map(_.prop('in_stock')) )
var accounting = accounting.formatMoney
var availablePrices =  _.compose(join(', '), _.map(_.compose(accounting, _.prop('dollar_value'))) , _.filter(_.prop('in_stock')) )

// console.log(availablePrices(CARS))

// filter prop 'in_stock'

// return 'dollar_value'

// join dollar_value with ', '




// var availablePrices = function(cars) {
//   var available_cars = _.filter(_.prop('in_stock'), cars);
//   return available_cars.map(function(x){
//     return accounting.formatMoney(x.dollar_value)
//   }).join(', ');
// };


// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip()

// var fastestCar = function(cars) {
//   var sorted = _.sortBy(function(car){ return car.horsepower }, cars);
//   var fastest = _.last(sorted);
//   return fastest.name + ' is the fastest';
// };
//
// var fastestCar = _.compose(_.prop('name'), (_.last, _.sortBy,(_.compose( _.prop('horsepower') ) )))
var append = _.flip(_.concat)
var fastestCar = _.compose(append(' is the fastest'), _.prop('name'), _.last, _.sortBy(_.prop('horsepower')))

console.log('fastestCar(CARS) '+fastestCar(CARS))

// // get the props horsepower
// _.props('horsepower')
// // use sortBy
// ( _.sortBy, _.props('horsepower') )
// // compose the above
// _.compose( _.sortBy, _.props('horsepower') )
// // compose a function that runs last on composed return
// _.last(_.compose( _.sortBy, _.props('horsepower') ) )
// // compose a function that gets the name prop of fastest(composed function above) using
// _.prop('name'), (_.last(_.compose( _.sortBy, _.props('horsepower') ) ))


// console.log(fastestCar(CARS))
// console.log(fastestCar(CARS))


// var hp = _.compose(_.props('horsepower') )
// console.log(hp(CARS))
//  and save it in a new function we create which adds our value to a string.

// var solution = _.compose(join(', is the fastest'))
// var hola = ['hello']
// console.log(solution(hola))









module.exports = { CARS: CARS,
                   isLastInStock: isLastInStock,
                   nameOfFirstCar: nameOfFirstCar,
                   fastestCar: fastestCar,
                   averageDollarValue: averageDollarValue,
                   availablePrices: availablePrices,
                   sanitizeNames: sanitizeNames
                 };
