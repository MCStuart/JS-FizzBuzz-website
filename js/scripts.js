// Business Logic
var beeopBoopSorry = "";

// Counts up from 0 to the user specified number and stores the count in an array
function incrementCount(number) {
  var numbersArray = [];
  for (var i = 0; i <= number; i++) {
    numbersArray.push(i);
  }
  return numbersArray;
}

// Isolates the digits inside of a number and adds them to an array
function digitSplitter(number) {
  var ones = Math.floor((number / 1) % 10);
  var tens = Math.floor((number / 10) % 10);
  var hundreds = Math.floor((number / 100) % 10);
  var digits = [];
  digits.push(hundreds);
  digits.push(tens);
  digits.push(ones);
  if ((number >= 0) && (number < 10)) {
    return digits.slice(2);
  } else if ((number >= 10) && (number < 100)) {
    return digits.slice(1);
  } else if ((number >= 100) && (number < 1000)) {
    return digits;
  }
}


console.log(digitSplitter(753));



// Return Beeps, Boops, and Sorry's
function beepBooper(digit) {
  var digit;
  if (digit === 3) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if (digit === 2) {
    return "Boop!";
  } else if (digit === 1) {
    return "Beep!";
  } else {
    return digit;
  }
}



// If a number in the array contains the digit 1, return "Beep!"
// function digitReader(number) {
//   digits = [];
//   for ()
// }



// User Interface logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = $("#input").val();
    console.log(number)
  });
});
