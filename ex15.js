function loadUsers(usersIds, load, done) {
  var users = [];
  for (var i = 0; i < usersIds.length; i++) {
    users.push(load(usersIds[i]));
  }
  return users;
}

module.exports = loadUsers;