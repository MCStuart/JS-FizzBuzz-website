// Business Logic

// Counts up from 0 to the user specified number and stores the count in an array
function incrementCount(userNumber) {
  var numbersArray = [];
  for (var i = 0; i <= userNumber; i++) {
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

function opensPodBayDoors(numbers) {
  var outputReturn = "";
  var numbersArray = incrementCount(userNumber);
  for (var i = 0; i < numbersArray.length; i++) {
    var number = numbersArray[i];
    if (number < 10) {
      return beepBooper(number);
    }
    else if ((number >=10) && (number <100)) {
      for (var d = 0; d < 2; d++) {
        var digit = digitSplitter[d];
        if ((digit === 3) || (digit === 2) || (digit === 1)) {
          return beepBooper(digit);
        }
        else {
          return number;
        }
      }
    }
    else if ((numbersArray[i] >= 100) && (numbersArray[i] < 1000)) {
      for (var h = 0; h < 3; h++) {
        var digit = digitSplitter[h];
        if ((digit === 3) || (digit === 2) || (digit === 1)) {
           return beepBooper(digit);
        } else {
          return number;
        }
      }
    }
  }
};

console.log(opensPodBayDoors(5))

// User Interface logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var userNumber = $("#input").val();
    console.log(userNumber)
  });
});
