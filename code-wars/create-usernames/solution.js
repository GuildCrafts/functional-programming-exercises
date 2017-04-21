addUsername = (list) => {
  const username = list.map((user) => { return user.username = (user.firstName + user.lastName[0] + ( new Date().getFullYear() - user.age)).toLowerCase()}) 
  return list
} 