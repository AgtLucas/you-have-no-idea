function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return goodUsers.every(function(submittedUsers) {
      return goodUsers.id === submittedUsers.id;
    });
  };
}

module.exports = checkUsersValid;
