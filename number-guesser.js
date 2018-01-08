var numberGuesser = function () {
  var randomNum = 0;
  var answersGiven = [];
  var answer = 0;
  var numTries = 0;
  var currentAnswers = 0;
  var correctNumber = 0;
  var alreadyGuessed = 0;
  var tooHigh = 0;
  var tooLow = 0;

  var prompt = require('prompt-sync')();

  var generateRandomNum = function() {
    return Math.floor((Math.random() * 100) + 1);;
  }

  var readInput = function() {
    return prompt('Guess a number: ');
  }

  var printNumTries = function(numTries) {
    console.log("You got it! You took " + numTries + " attempts!");
    return;
  }

  var checkNumber = function(answer) {
    if (answer == randomNum) {
      numTries++;
      correctNumber = 1;
      printNumTries(numTries);
    } else if (answer > randomNum) {
      tooHigh = 1;
      processInput(randomNum, answer);
    } else if (answer < randomNum) {
      tooLow = 1;
      processInput(randomNum, answer);
    } else if (isNaN(answer)) {
      console.log("Not a Number! Try Again!");
    }
  }



  var processInput = function(randomNum, answer) {
  //check if it's the first number of the program
    if (answersGiven.length) {
      currentAnswers = answersGiven.length -1;
    }

    alreadyGuessed = 0;
  //go through each answer in the array to see if it's been guessed before
    for (i = 0; i <= currentAnswers; i++) {
      if (answer === answersGiven[i]) {
        alreadyGuessed = 1;
      } else {
      }
    }

    answersGiven.push(answer);
  //if it's not already been guessed, then check if it's too high or low and add it to attempts
    if (alreadyGuessed == 0) {
      numTries++;
      if (tooLow == 1) {
        console.log("Too Low!");
        tooLow = 0;
      } else if (tooHigh == 1) {
        console.log("Too High!");
        tooHigh = 0;
      }
    } else {
        console.log("Already Guessed!");
        tooHigh = 0;
        tooLow = 0
    }
    return;
  }

  var randomNum = generateRandomNum();

  while (correctNumber != 1) {
    answer = readInput();
    checkNumber(answer);
  }

  return;
}

numberGuesser();

