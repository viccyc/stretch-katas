var makeCase = function(input, style) {
// make the style into an array for case purposes
  var arrayStyle = style.toString().split(",");
// break the string up into words
  var stringInput = input;
  var stringArray = input.split(" ");
  var makeCaseString = "";
  var firstLetter = "";
  var stringWithoutFirstLetter = "";
  let i = 0;
  var myLetter = "";
  var previousStyle = "";
  var processedFirst = "";
  var processedSecond = "";
  var processedThird = "";

// if there's only one style (i.e. a string) then make it into an array so we can process like the array input
  if (style[i].length === 1) {
    style = style.split();
  }
// Flag each style for processing which has been input as a parameter
  for (i = 0; i < style.length; i++) {
    switch (style[i]) {
      case "camel":
      case "pascal":
      case "snake":
      case "kebab":
      case "title":
        processedFirst = style[i];
        break;
      case "vowel":
      case "consonant":
        processedSecond = style[i];
        break;
      case "upper":
      case "lower":
        processedThird = style[i];
        break;
      default:
    }
  }


  if (processedFirst) {
    switch (processedFirst) {
      case "camel":
        //go through each word in new array
        for (i = 0; i < stringArray.length; i++) {
          firstLetter = stringArray[i].charAt(0);
          stringWithoutFirstLetter = stringArray[i].slice(1);

        //only capitilize first letter of 2nd word onwards
          if (i != 0) {
            firstLetter = firstLetter.toUpperCase();
            makeCaseString += firstLetter + stringWithoutFirstLetter;
          } else {
            makeCaseString += firstLetter + stringWithoutFirstLetter;
          }
        }
        break;

      case "pascal":
        //go through each word in new array
        for (i = 0; i < stringArray.length; i++) {
          firstLetter = stringArray[i].charAt(0);
          stringWithoutFirstLetter = stringArray[i].slice(1);

        // capitilize first letter each word
            firstLetter = firstLetter.toUpperCase();
            makeCaseString += firstLetter + stringWithoutFirstLetter;

        }
        break;
      case "snake":
        //go through each word in new array
        for (i = 0; i < stringArray.length; i++) {
            makeCaseString += stringArray[i] + "_";

        }
        makeCaseString = makeCaseString.slice(0, -1);
        break;
      case "kebab":
        //go through each word in new array
        for (i = 0; i < stringArray.length; i++) {
            makeCaseString += stringArray[i] + "-";

        }
        makeCaseString = makeCaseString.slice(0, -1);
        break;
      case "title":
        //go through each word in new array
        for (i = 0; i < stringArray.length; i++) {
          firstLetter = stringArray[i].charAt(0);
          stringWithoutFirstLetter = stringArray[i].slice(1);

            firstLetter = firstLetter.toUpperCase();
            makeCaseString += firstLetter + stringWithoutFirstLetter + " ";

        }
        makeCaseString = makeCaseString.slice(0, -1);
      break;
    }
  }

  if (processedSecond) {
    switch (processedSecond) {
      case "vowel":
        if (makeCaseString) {stringInput = makeCaseString};
        makeCaseString = "";
          //go though each letter of word
        for (i = 0; i < stringInput.length; i++) {
            myLetter = stringInput.charAt(i);
            if ((myLetter === "a") || (myLetter === "e") || (myLetter === "i") || (myLetter === "o") || (myLetter === "u")) {
              myLetter = myLetter.toUpperCase();
              makeCaseString += myLetter;
            } else {
              makeCaseString += myLetter;
            }
          }
      break;

      case "consonant":
        if (makeCaseString) {stringInput = makeCaseString};
        makeCaseString = "";
          //go though each letter of word
        for (i = 0; i < stringInput.length; i++) {
            myLetter = stringInput.charAt(i);
            if ((myLetter === "a") || (myLetter === "e") || (myLetter === "i") || (myLetter === "o") || (myLetter === "u")) {
              makeCaseString += myLetter;
            } else {
              myLetter = myLetter.toUpperCase();
              makeCaseString += myLetter;
            }
        }
      break;
    }
  }

  if (processedThird) {
    switch (processedThird) {
      case "upper":
        makeCaseString = makeCaseString.toUpperCase();
      break;

      case "lower":
        makeCaseString = makeCaseString.toLowerCase();
      break;
    }
  }

  return makeCaseString;
}


console.log(makeCase('this is a string', 'camel'));
console.log(makeCase('this is a string', 'pascal'));
console.log(makeCase('this is a string', 'snake'));
console.log(makeCase('this is a string', 'kebab'));
console.log(makeCase('this is a string', 'title'));
console.log(makeCase('this is a string', 'vowel'));
console.log(makeCase('this is a string', 'consonant'));
console.log(makeCase('this is a string', ['upper', 'snake']));

