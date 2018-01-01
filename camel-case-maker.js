var camelCase = function(input) {
// break the string up into words
  var stringArray = input.split(" ");
  var camelCaseString = "";

//go through each word in new array
  for (let i = 0; i < stringArray.length; i++) {
    var firstLetter = stringArray[i].charAt(0);
    var stringWithoutFirstLetter = stringArray[i].slice(1);

//only capitilize first letter of 2nd word onwards
    if (i != 0) {
      firstLetter = firstLetter.toUpperCase();
      camelCaseString += firstLetter + stringWithoutFirstLetter;
    } else {
      camelCaseString += firstLetter + stringWithoutFirstLetter;
    }
  }
  return camelCaseString;
}

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));
