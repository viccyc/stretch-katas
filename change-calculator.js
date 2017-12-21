var calculateChange = function(total, cash) {

  let denominations = {
    twenty:        20,
    ten:           10,
    five:          5,
    twoDollar:     2,
    dollar:        1,
    quarter:       .25,
    dime:          .1,
    nickel:        .5,
    penny:         .01
  };

  //calculate change given
  var changeGiven = (cash - total).toFixed(2);

  for (const property in denominations) {
    if (changeGiven / denominations[property] > 1) {
      var propertyInitialValue = denominations[property];

      denominations[property] = Math.floor(changeGiven / denominations[property]);
      changeGiven = (changeGiven - (propertyInitialValue * denominations[property])).toFixed(2);
    } else {
       delete denominations[property];
    }
  }
  return denominations;
}

console.log(calculateChange(17.87, 20));
console.log(calculateChange(26.23, 40));
console.log(calculateChange(5.01, 10));
