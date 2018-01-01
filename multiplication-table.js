var multiplicationTable = function(maxValue) {
  //generate an array with the max value
  var numberArray = [maxValue];
  var nextNumber = 0;
  var numberString = "| ";
  var firstRow = "\r";
  var lastRow = "\r";
  var lastNumber = maxValue * maxValue;
  var numDigitRows = maxValue;
  var multiplier = 2;
  var nextArray = [];

  for (let i = 0; i < maxValue; i++) {
      var firstNumber = maxValue - 1;

        if (i === 0) {
            numberArray.unshift(firstNumber);
            nextNumber = firstNumber - 1;
        } else {
            numberArray.unshift(nextNumber);
            nextNumber -= 1;
        }
      firstRow += "+-----"
      lastRow += "+-----"
  }
  numberArray.shift();

  //for (let j = 0; j < numDigitRows; j++) {
    for (let k = 0; k < numberArray.length; k++) {
      nextArray.push(numberArray[k] * multiplier);
  }
  //}
     console.log(nextArray);
 //console.log("numberArray" + numberArray);
 // for (let j = 0; j < numberArray.length; j++) {
  var numDigits = lastNumber.toString().length;

 //console.log("numDigits: " + numDigits);

      if ( numDigits === 1) {
        numberString += numberArray.join(" |") + "   |";
      } else if (numDigits === 2) {
        numberString += numberArray.join(" |") + "  |";
      } else if (numDigits === 3) {
        numberString += numberArray.join(" |") + " |";
      }

  //}


console.log(firstRow + "\r");
console.log(numberString + "\r");
console.log(lastRow);
return "";
}

console.log(multiplicationTable(5));
//console.log(multiplicationTable(5));
//console.log(multiplicationTable(10));
