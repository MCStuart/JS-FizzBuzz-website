// Business Logic
var beeopBoopSorry = "";
numbersArray = [0, 1, 2, 3, 4, 5] // test array

// Counts up from 0 to the user specified number and stores the count in an array
function incrementCount(number) {
  var numbersArray = [];
  for (var i = 0; i <= number; i++) {
    numbersArray.push(i);
  }
  return numbersArray;
}

console.log(incrementCount(15));

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
