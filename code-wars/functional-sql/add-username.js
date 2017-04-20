function addUsername(list) {
  list.map((user) => {
      return user.username = (user.firstName + user.lastName[0] + (new Date().getFullYear() - user.age)).toLowerCase()
    })
    return list
  }
module.exports = {addUsername: addUsername}
