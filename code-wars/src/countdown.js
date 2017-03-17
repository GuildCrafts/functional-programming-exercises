function countdown(times, array = []) { 
  if(times > 0 || times === 0) {
   array.push(0)
   return array
  }
  return function(changeInTime) {
    array.push(-times)
    if(changeInTime){ times += changeInTime }
    times +=1
    return countdown(times, array)
  }
}
