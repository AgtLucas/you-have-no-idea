function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUsers) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUsers.id;
      })
    });
  };
}

module.exports = checkUsersValid;
