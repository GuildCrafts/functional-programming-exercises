require('../support')
const Task = require('data.task')
const _ = require('ramda')

// Exercise 1
// ==========
// Use _.add(x,y) and _.map(f,x) to make a function that increments a value inside a functor

const ex1 = _.map(_.add(1))

// Exercise 2
// ==========
// Use _.head to get the first element of the list
const xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])

const ex2 = _.map(_.head)

// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user
const safeProp = _.curry(function (x, o) { return Maybe.of(o[x]) })

const user = { id: 2, name: 'Albert' }

const ex3 = _.compose(_.map(_.head),safeProp('name'))

// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement

// Original Function
// const ex4 = function (n) {
//   if (n) { return parseInt(n) }
// }

const ex4 = (n) => Maybe.of(parseInt(n))


// Exercise 5
// ==========
// Write a function that will getPost then _.toUpper the post's title

// getPost :: Int -> Future({id: Int, title: String})
const getPost = (i) => {
  return new Task((rej, res) => {
    setTimeout(() => {
      res({id: i, title: 'Love them futures'})
    }, 300)
  })
}

const ex5 = _.compose(_.compose(_.map(_.toUpper), _.map(_.prop('title'))),getPost)


// Exercise 6
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access or return the error

const showWelcome = _.compose(_.concat( 'Welcome '), _.prop('name'))

const checkActive = (user) => user.active ? Right.of(user) : Left.of('Your account is not active')

// const ex6 = function(user) {
//   return _.compose(Maybe.of(showWelcome), checkActive)
// }

const ex6 = _.compose(_.map(showWelcome), checkActive)

// Exercise 7
// ==========
// Write a validation function that checks for a length > 3. It should return Right(x) if it is greater than 3 and Left("You need > 3") otherwise

const ex7 = (x) => x.length ? Right.of(x) : Left.of('You need > 3') // <--- write me. (don't be pointfree)



// Exercise 8
// ==========
// Use ex7 above and either as a functor to save the user if they are valid or return the error message string. Remember either's two arguments must return the same type.

const save = (x) => {
  return new IO(() => {
    console.log('SAVED USER!')
    return x + '-saved'
  })
}

const ex8 = _.compose(either(IO.of,save), ex7)

module.exports = {ex1: ex1, ex2: ex2, ex3: ex3, ex4: ex4, ex5: ex5, ex6: ex6, ex7: ex7, ex8: ex8}
