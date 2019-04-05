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

// Isolates the digits inside of a number
function digitSplitter(number) {
  var digits = [];
  if ((number >= 0) && (number < 10)) {
    return digits.push(number);
  } else if ((number >= 10) && (number < 100)) {
    return [digits.push(Math.floor((number / 1) % 10)),
      digits.push(Math.floor((number / 10) % 10))];
  } else if ((number >= 100) && (number < 1000)) {
    return [digits.push(Math.floor((number / 1) % 10)),
      digits.push(Math.floor((number / 10) % 10)),
      digits.push(Math.floor((number / 100) % 10))];
  }
  console.log(digits[1]);
}

// digits.push(Math.floor((number / 1) % 10));
// digits.push(Math.floor((number / 10) % 10));
// digits.push(Math.floor((number / 100) % 10));

console.log(digitSplitter(4));
// Math.floor((736 / 1) % 10))



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
