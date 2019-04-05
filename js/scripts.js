// Business Logic
// Counts up from 0 to the user specified number and stores the count in an array
function incrementCount(number) {
  var numbersArray = [];
  for (var i = 0; i <= number; i++) {
    numbersArray.push(i);
  }
  return numbersArray;
}
// Isolates the digits inside of a number and adds them to an array
function digitSplitter(numbersArray) {
  for (var i = numbersArray[0]; i < numbersArray.length; i++) {
    var ones = Math.floor((numbersArray[i] / 1) % 10);
    var tens = Math.floor((numbersArray[i] / 10) % 10);
    var hundreds = Math.floor((numbersArray[i] / 100) % 10);
    var digits = [];
    digits.push(hundreds);
    digits.push(tens);
    digits.push(ones);
    if ((numbersArray[i] >= 0) && (numbersArray[i] < 10)) {
      return digits.slice(2);
    } else if ((numbersArray[i] >= 10) && (numbersArray[i] < 100)) {
      return digits.slice(1);
    } else if ((numbersArray[i] >= 100) && (numbersArray[i] < 1000)) {
      return digits;
    }
  }
}

// Verifies is an array of sperated digits contains any of the proscribed values to replace
var specifiedNumber = function isSpecifiedNumber(digits) {
  return (digits === 3) || (digits === 2) || (digits === 1);
  };
console.log(digits.some(specifiedNumber));

// Return Beeps, Boops, and Sorry's for matching values
function beepBooper(digits) {
  for (var i = digits[0]; i < digits.length; i++) {
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
};


// User Interface logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = $("#input").val();

  });
});
