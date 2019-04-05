// Business Logic

// Counts up from 0 to the user specified number and stores the count in an array
function incrementCount(number) {
  var numberArray = [];
  for (var i = 0; i <= number; i++) {
    numberArray.push(i);
  }
  return numberArray
}
