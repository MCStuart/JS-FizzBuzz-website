// Business Logic
// Counts up from 0 to the user specified number and stores the count in an array
function incrementCount(userNumber) {
  var numbers = [];
  for (var i = 0; i <= userNumber; i++) {
    numbers.push(digitFinder(i.toString()));
  }
  return numbers;
};

// Looks for specific digit values in a number by converting to a string
function digitFinder(numbers) {
  var outputString = "";
  if ((numbers).toString().includes("3")) {
    return outputString = (outputString + " " + "I'm sorry, Dave. I'm afraid I can't do that.");
  }
  else if ((numbers).toString().includes("2")) {
    return outputString = (outputString + " " + "Boop!");
  }
  else if ((numbers).toString().includes("1")) {
    return outputString = (outputString + " " +  "Beep!");
  }
  else {
    return outputString = (outputString + " " + numbers)
  }
};

// User Interface logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var userNumber = $("#input").val();
    var output = incrementCount(userNumber);
    $('.result').show();
    $('#outputStr').text(output);
  });
});
