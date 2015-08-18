function doubleAll(numbers) {
  var result = [];
  numbers.map(function(i) {
    result.push(i * 2);
  });

  return result;
}

module.exports = doubleAll;
