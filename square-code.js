var squareCode = function() {
  var correctLength = 0;
  var messageLength = 0;
  var numRows = 0;
  var numColummns = 0;
  var squareRoot = 0;
  var illegalChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=1234567890 ";
  var illegalInput = 0;
  var codeArray = [];
  var columnCount = 0;
  var rowCount = 1;
  var codeMessage = "";
  var codeString = "";
  var letterCount = 0;
  var MsgCount = 0;
  var prompt = require('prompt-sync')();

  var readInput = function() {
    return prompt('Enter a message with no spaces: ');
  }

  //check the string is just letters, no illegal chars
  var checkIllegal = function(answer){
    for(i = 0; i < illegalChars.length;i++){
        if(answer.indexOf(illegalChars[i]) > -1){
            return true
        }
    }
    return false;
  }

  //check the string is not too long or has illegal chars
  var checkAnswer = function(answer) {
    messageLength = answer.length;
    if (messageLength > 81) {
      console.log("Max length is 81 chars!");
      correctLength = 0;
    } else {
      correctLength = 1;
    }
    if (checkIllegal(answer) == true){
      console.log('Your search string contains illegal characters.');
      illegalInput = 1;
    } else {
      illegalInput = 0;
    }

  }

  //calculate how many row and columns in the square
  var calcSquareNumbers = function(messageLength) {
    squareRoot = Math.sqrt(messageLength);
    var stringSqRt = (squareRoot % 1).toString();

    if (squareRoot % 1 != 0) {
    //round up or down depending on decimal
      if (Number(stringSqRt) > 0.5) {
        numRows = Math.ceil(squareRoot);
      } else {
        numRows = Math.floor(squareRoot);
      }
      numColummns = Math.ceil(squareRoot);
    } else {
      numRows = squareRoot;
      numColummns = squareRoot;
    }
  }

  var createSquare = function(answer, numColummns, numRows) {
    for (var i = 0; i < answer.length; i++) {
      codeArray.push(answer[i]);
      columnCount++;
      if ((columnCount ==  numColummns) && (rowCount != numRows)) {
        // carriage return after every row of square
        codeArray.push("\n");
        columnCount = 0;
        rowCount++;
      }
    }
    //make it into a string and get rid of commas from array
    codeString = codeArray.toString();
    codeString = codeString.replace(/,/g, "");
    console.log(codeString);
  }

  //work through every column and every letter in the column adding to the string
  var createCodeMsg = function(codeString, numColummns) {
    var i = 0;
    for (var j = 0; j < numColummns; j++) {
      while (letterCount < codeString.length) {
        for (i = MsgCount; i < numColummns; i++) {
          if (codeString[letterCount] != null) {
            codeMessage += codeString[letterCount];
          }
          letterCount = letterCount + (numColummns + 1);
          if (letterCount >= codeString.length) {
            i = codeString.length;
            codeMessage += " ";
          }
        }
      }
      MsgCount++;
      letterCount = MsgCount;
    }
    console.log("codeMessage: " + codeMessage);
   }

  while (correctLength != 1)  {
    var answer = readInput();
    checkAnswer(answer);
  }

  while (illegalInput == 1)  {
    var answer = readInput();
    checkAnswer(answer);
  }

  calcSquareNumbers(messageLength);
  createSquare(answer, numColummns, numRows);
  createCodeMsg(codeString, numColummns);

  return;
}

squareCode();