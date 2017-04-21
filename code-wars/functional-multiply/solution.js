// const multiplyAll = (arr) => {
//   return (multiply_all) => {
//     return arr.map((num) => {return num * multiply_all})
//   }
// }
// same as..

multiplyAll = arr => num => arr.map(n => n * num)