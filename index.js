// countOnline should use for..in statement to loop through the users object passed into the function and return
// the number of users whose online property is true

let users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let onlineCount = 0
  for (let user in usersObj) {
    console.log(usersObj[user].online)
    if (usersObj[user].online === true) {
      onlineCount++
    }
  }
  return onlineCount
}

countOnline(users)