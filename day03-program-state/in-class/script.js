/*Create a game where a player must correctly guess secret words to win.

The computer chooses a random word from a set of three words. Feel free to use whatever words you'd like, but we will be using the words "banana", "chisel", and "faucet".

To win the game the player must guess correctly twice in total; but is allowed to guess wrongly in between their two correct guesses.

For each guess, output all information such as the guessed word, the secret word, and how many correct guesses the player still needs until she wins.
*/
// User input - banana, chisel, faucet.
// Expect user guess correctly, wrongly or win the game when guess correctly twice
// Create function that generate a random word
// C
var countOfWin = 0;

var getRandomObject = function () {
  var randomNum = Math.floor(Math.random() * 3);
  var ramdomObject = ["BANANA", "CHISEL", "FAUCET"]; // random object array o= SCISSor 1 = paper  2 for ston
  var computerObject = ramdomObject[randomNum];
  return computerObject;
};
//var main = function (input)

var secretWordBaseMain = function (inputObject) {
  //var computerObject = getRandomObject();
  var computerObject = "BANANA";
  // input vallidy check
  if (
    inputObject !== "BANANA" &&
    inputObject !== "CHISEL" &&
    inputObject !== "FAUCET"
  ) {
    var myOutPutValue =
      inputObject +
      " It is ivalid entry Plase enter  BANANA ot CHISEL ot FAUCET ";
    return myOutPutValue;
  }

  if (inputObject == computerObject) {
    countOfWin += 1;
    myOutPutValue = "You guess correctly";
  } else {
    myOutPutValue = "You guess wrongly";
  }

  if (countOfWin == 2) {
    countOfWin = 0;
    myOutPutValue = "You won the game and you can try again";
  }

  return myOutPutValue;
};

/*
Create a new version of our Coding Basics dice game (where the player guesses the dice roll) that randomly becomes easier or harder. 
At the beginning of the game and each time the player wins, the computer selects a random number from 1 to 3, which we call the "within number". 
If any of the player's guesses fall within the dice roll plus or minus the within number, the player wins.
For example: the app randomly chooses 3 as the within number. The player can guess within 3 of the dice roll to win the game. 
The player guesses 2 and the dice roll is 5. The guess is within 3 of the dice roll so the player wins the game. 
At this point, the computer adjusts the difficulty of the game by choosing a new within number.
*/

// User guess a dice roll number
// Computer will generate a random dice roll number from 1 to 6
// Computer will generate a random number from 1 to 3 which will be the "within number"

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

/*
var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.

  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
*/
