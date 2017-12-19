var conditionalSum = function(values, condition) {
  var summedValues = 0;

  for (i = 0; i < values.length; i++) {
    if (condition === 'even') {
        if (values[i] % 2 === 0)
        summedValues += values[i];
    } else {
        if (values[i] % 2 != 0)
        summedValues += values[i];
    }
  }
  return summedValues;
}



console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));