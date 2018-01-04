var numberGuesser = function (input) {
  var randomNum = 0;
  var answersGiven = [];
  var answer = 0;
  var numTries = 1;
  var currentAnswers = 0;

  var generateRandomNum = function() {
    randomNum = Math.floor((Math.random() * 10) + 1);
    return randomNum;
  }

  var readInput = function() {
    var prompt = require('prompt-sync')();

    // code below (replace this example)
    answer = prompt('Guess a number: ');
    console.log('You answered: ' + answer);

    answer = Number(answer);
console.log("does answer " + answer + " === randomNum " + randomNum);
        if (answer === randomNum) {
           printNumTries(numTries);
        }
    processInput(randomNum, answer);
  //  return answer;
  }

  var processInput = function(randomNum, answer) {
    // add the answer to an array
    console.log("randomNum: " + randomNum);
//    console.log("answer: " + answer);
      if (answersGiven.length) {
        currentAnswers = answersGiven.length -1;
      }
console.log("currentAnswers: " + currentAnswers);
    for (i = 0; i <= currentAnswers; i++) {
      if (answer === answersGiven[i]) {
        console.log("Already Guessed!");
    //    answersGiven.pop();
        readInput();
      } else {
        numTries++;
//        currentAnswers = answersGiven.length;
        console.log("Not guessed before!");
      }
    }
    answersGiven.push(answer);
    console.log("answersGiven: " + answersGiven);
//    console.log(answersGiven);
    readInput();
  }

  var printNumTries = function(numTries) {
    console.log("numTries: " + numTries);
    return;
  }

  generateRandomNum();
  readInput();
  return;
}

console.log(numberGuesser(0));