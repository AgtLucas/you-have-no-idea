function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return goodUsers.evey(function(submittedUsers) {
      return goodUsers.id === submittedUsers.id;
    });
  };
}

module.exports = checkUsersValid;
