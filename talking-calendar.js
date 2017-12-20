//  The date will always be formatted as YYYY/MM/DD

var talkingCalendar = function(date) {
  var dateYear  = date.substr(0, 4);
  var dateMonth = date.substr(5, 2);
  var dateDay   = date.substr(8, 2);
  var months    = new Array(12);
  var suffix    = "";

  months[1] = "January";
  months[2] = "February";
  months[3] = "March";
  months[4] = "April";
  months[5] = "May";
  months[6] = "June";
  months[7] = "July";
  months[8] = "August";
  months[9] = "September";
  months[10] = "October";
  months[11] = "November";
  months[12] = "December";

  if (dateDay.substr(0, 1) != "1") {
     switch(dateDay.substr(1, 1)) {
       case "1":
           suffix = "st";
           break;
       case "2":
           suffix = "nd";
           break;
       case "3":
           suffix = "rd";
           break;
       default:
           suffix = "th";
    }
  } else {
     suffix = "th";
  }

  if (dateMonth.substr(0, 1) === "0")  {
     dateMonth = dateMonth.replace("0", "");
  }  else if (dateDay.substr(0, 1) === "0") {
     dateDay = dateDay.replace("0", "");
  }

  return (months[dateMonth] + " " + dateDay + suffix + ", " + dateYear);

//  console.log(dateDay);
}

console.log(talkingCalendar('2017/12/12'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));
