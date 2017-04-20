function find_average(array){
  return array.reduce(((sum, current) => sum + current), 0) / array.length;
}
module.exports = {find_average: find_average}
