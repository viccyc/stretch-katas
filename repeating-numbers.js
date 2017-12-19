var repeatNumbers = function(data) {
  var concatString = "";

  for (var i = 0; i < data.length; i++) {
    var dataArray = data[i];
    var numberToRepeat = dataArray[0];
    var repeatTime = dataArray[1];

    if (concatString != "") {
     concatString += ", ";
    }

    for (var j = 0; j < repeatTime; j++) {
      concatString += numberToRepeat;
    }
  }
  return concatString;
}

console.log(repeatNumbers([[1, 10]]))
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]))