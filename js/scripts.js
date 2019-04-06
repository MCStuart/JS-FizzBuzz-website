// Business Logic
// Counts up from 0 to the user specified number and stores the count in an array

function incrementCount(userNumber) {
  var numbers = [];
  for (var i = 0; i <= userNumber; i++) {
    numbers.push(i)
  }
  return (numbers);
};

// Isolates the digits inside of a number and adds them to an array
function digitFinder(numbers) {
  var outputString = "";
  if ((number).toString().includes("3") != -1) {
    return outputString = (outputString + " " + "I'm sorry, Dave. I'm afraid I can't do that.");
  }
  else if ((number).toString().includes("2") != -1) {
    return outputString = (outputString + " " + "Boop!");
  }
  else if ((number).toString().includes("1") != -1) {
    return outputString = (outputString + " " +  "Beep!");
  }
  else {
    return outputString = (outputString + " " + number);
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
