var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  // Initialise an empty names array
  var names = [];

  //var main = function (input) {
  // Set a boolean value found to a default value of false
  var found = false;

  // Loop over the names array, and set found to true if the input name already
  // exists in the names array
  var index = 0;

  for (var index = 0; index < names.length; index += 1) {
    var currentName = names[index];
    if (currentName == input) {
      found = true;
    }
  }

  // If no duplicate name was found, add the input name to the names array
  if (!found) {
    names.push(input);
  }

  // Return the full array of names
  var myOutputValue = "All names: " + names;
  return myOutputValue;
};
//var myOutputValue = "hello world";
//return myOutputValue;
//};

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  // Initialise a counter to 0.
  var myOutputValue = "";
  var counter = 0;
  // Continue the loop while counter is less than the input value
  while (counter < input) {
    // Add 1 "yes" to the output for every loop iteration.
    myOutputValue = myOutputValue + "yes";
    counter = counter + 1;
  }
  return myOutputValue;
};

/*var loopWithinLoopMain = function (inputRow, inputColumn) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.

  var myOutputValueRow = "";
  var myOutputValueColumn = "";
  var counterRow = 0;
  var counterColumn = 0;
  // Continue the loop while counter is less than the input value
  while (counterRow < inputRow) {
    // Add 1 "yes" to the output for every loop iteration.
    myOutputValueRow = myOutputValueRow + "X";
    while (counterColumn < inputColumn) {
      myOutputValueColumn = myOutputValueColumn + "Y";
      counterColumn = counterColumn + 1;
    }
    counterRow = counterRow + 1;
  }
  var myOutputValue = myOutputValueRow + myOutputValueColumn;

  return myOutputValue;
};*/
var loopWithinLoopMain = function (input) {
  var myOutputValue = "";

  // Initialise the outer counter, rowCounter
  var rowCounter = 0;

  while (rowCounter < input) {
    // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 0;

    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter < input) {
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + "Hello ";
      columnCounter = columnCounter + 1;
    }

    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    rowCounter = rowCounter + 1;
  }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
