// Solution code for Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language
// https://www.codewars.com/kata/coding-meetup-number-17-higher-order-functions-series-sort-by-programming-language/train/javascript

var _ = require('ramda');

var list1 = [
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];

var sortByLanguage = _.compose( _.sortBy( _.prop( 'language' )), _.sortBy( _.prop('firstName')) )

console.log(sortByLanguage(list1))
