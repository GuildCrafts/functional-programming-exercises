require('../support')
const _ = require('ramda')
const accounting = require('accounting')

// const trace = curry(function(tag, x) {
//   console.log(tag, x)
//   return x
// })

// Example Data
const CARS = [
  {name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true},
  {name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false},
  {name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false},
  {name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false},
  {name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true},
  {name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false}
]

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

// Original function
// const isLastInStock = function(cars) {
//   const reversed_cars = _.last(cars)
//   return _.prop('in_stock', reversed_cars)
// }

const isLastInStock = _.compose(_.prop('in_stock'),_.last)

// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car
const nameOfFirstCar = _.compose(_.prop('name'),_.head)


// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition
const _average = function(xs) { return _.reduce(_.add, 0, xs) / xs.length } // <- leave be

// Original
// const averageDollarValue = function(cars) {
//   const dollar_values = map(function(c) { return c.dollar_value }, cars)
//   return _average(dollar_values)
// }

const averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')))


// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that takes an array of cars and returns a list of lowercase and underscored names: e.g: sanitizeNames([{name: 'Ferrari FF'}]) //=> ['ferrari_ff'].

const _underscore = _.replace(/\W+/g, '_') //<-- leave this alone and use to sanitize

const sanitizeNames = _.compose(_.map(_.toLowerCase), _.map(_underscore), _.map(_.prop('name')))


// Bonus 1:
// ============
// Refactor availablePrices with compose.

// Original
// const availablePrices = function(cars) {
//   const available_cars = _.filter(_.prop('in_stock'), cars)
//   return available_cars.map(function(x){
//     return accounting.formatMoney(x.dollar_value)
//   }).join(', ')
// }

const availablePrices = _.compose(_.join(', '), accounting.formatMoney, _.map(_.prop('dollar_value')), _.filter(_.prop('in_stock')))

// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip()

// Original
// const fastestCar = function(cars) {
//   const sorted = _.sortBy(function(car){ return car.horsepower }, cars)
//   const fastest = _.last(sorted)
//   return fastest.name + ' is the fastest'
// }

// Solution
const fastestCar = _.compose(_.flip(_.concat)(' is the fastest'), _.prop('name'), _.last, _.sortBy(_.prop('horsepower')))

//Alternate solution
// const fastestCar = _.compose(join(''), _.append(' is the fastest'), _.prop('name'), _.last, _.sortBy(_.prop('horsepower')))

module.exports = {
  CARS: CARS,
  isLastInStock: isLastInStock,
  nameOfFirstCar: nameOfFirstCar,
  fastestCar: fastestCar,
  averageDollarValue: averageDollarValue,
  availablePrices: availablePrices,
  sanitizeNames: sanitizeNames
}
