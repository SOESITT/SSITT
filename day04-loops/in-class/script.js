/*
 * Base: Emoji Drawing Number of Characters
 */

//Use loops to create an app that draws emojis into the grey box.
//The user will enter a number of characters to display on the screen.

// Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
var myOutputValue = "";
var counter = 0;
var counter1 = 0;

var emojiNumberCharactersMain = function (input) {
  for (counter = 0; counter < input; counter += 1) {
    myOutputValue += "🤣";
  }
  return myOutputValue;
};

//The user will enter the dimensions of a square to display on the screen.
//Use a loop within a loop and the <br /> HTML tag in your output to create the square.

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.

  for (var counterOuter = 0; counterOuter < input; counterOuter += 1) {
    for (var counterInner = 0; counterInner < input; counterInner += 1) {
      myOutputValue += "🤣";
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

//The user will enter the dimensions of a triangle to display on the screen.‌
//Use a loop within a loop and the <br /> HTML tag in your output to create the triangle.

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.

  for (var counterOuter = 0; counterOuter < input; counterOuter += 1) {
    for (var counterInner = 0; counterInner < input; counterInner += 1) {
      myOutputValue += "🤣";
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

/**
 * Comfortable: Emoji Drawing Triangle
 */

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = "";
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  for (var outerCounter = 0; outerCounter < sideLength; outerCounter += 1) {
    // Change the inner loop to only run outerCounter number of times
    // This means that we only have as many 👍 on each line as the current row index.
    // To ensure we always print the last emoji on each row, change the inner loop
    // conditional to use <= instead of <.
    for (
      var innerCounter = 0;
      innerCounter <= outerCounter;
      innerCounter += 1
    ) {
      // Add a 👍 to the current row
      myOutputValue += "👍";
    }
    // Insert a line break to start a new row
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

/**
 * More Comfortable: Emoji Drawing Outline Square
 */

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "";
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  for (var outerCounter = 0; outerCounter < sideLength; outerCounter += 1) {
    for (var innerCounter = 0; innerCounter < sideLength; innerCounter += 1) {
      // If current iteration represents a border element, draw ✊ instead.
      if (
        outerCounter == 0 ||
        outerCounter == sideLength - 1 ||
        innerCounter == 0 ||
        innerCounter == sideLength - 1
      ) {
        myOutputValue += "✊";
      } else {
        // Add a 👍 to the current row
        myOutputValue += "👍";
      }
    }
    // Insert a line break to start a new row
    myOutputValue += "<br>";
  }
  return myOutputValue;
};
/**
 * Base: Multi-Dice Game
 */

// Declare game mode constant variables
// Constants variables are typically in SCREAM_CASE
var GAME_MODE_ENTER_NUM_DICE = "ENTER_NUM_DICE";
var GAME_MODE_ENTER_GUESS = "ENTER_GUESS";

// Initialise game mode to enter num dice mode
var gameMode = GAME_MODE_ENTER_NUM_DICE;

// Keep track of variables needed for a single round
var diceRolls = [];
var hasUserWon = false;
var numDice;

// Keep track of variables needed across multiple rounds
var numRoundsPlayed = 0;
var numWins = 0;

// Return a number from 1-6
var rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  if (gameMode == GAME_MODE_ENTER_NUM_DICE) {
    numDice = Number(input);
    gameMode = GAME_MODE_ENTER_GUESS;
    return `You have chosen to roll ${numDice} dice. Please enter a single guess for all of these dice.`;
  }
  // The following code assumes ENTER_GUESS game mode
  // because we return at the end of the previous if statement
  var userGuess = Number(input);
  // Initialise diceRolls array to store dice rolls for this round
  diceRolls = [];
  // Initialise hasUserWon to false for this round
  hasUserWon = false;
  // Increment number of games the user has played for win loss record
  numRoundsPlayed += 1;
  // Roll numDice number of dice
  for (var counter = 0; counter < numDice; counter += 1) {
    var diceRoll = rollDice();
    // Store the current dice roll in diceRolls to show the user later
    diceRolls.push(diceRoll);
    // If dice roll matches user guess, store that user has won
    if (diceRoll == userGuess) {
      hasUserWon = true;
    }
  }

  // Increment win counter if user has won
  if (hasUserWon) {
    numWins += 1;
  }

  // After the round is over, reset mode to enter num dice so user can play again.
  gameMode = GAME_MODE_ENTER_NUM_DICE;

  // Save generic output for both win and loss conditions to avoid repeating code.
  var numLosses = numRoundsPlayed - numWins;
  var genericOutputPrefix = `You guessed ${userGuess} and the computer rolled ${diceRolls}.`;
  var genericOutputSuffix = `
    Your win-loss record is ${numWins}-${numLosses}. <br/><br/>
    Please enter a number of dice to roll to start again.
  `;
  // If user has won, output win message.
  if (hasUserWon) {
    return `${genericOutputPrefix} You win! ${genericOutputSuffix}`;
  }
  // If user has not won, output lose message.
  return `${genericOutputPrefix} You lose. ${genericOutputSuffix}`;
};
/**
 * More Comfortable: Multi-Round Multi-Dice Game
 */

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  if (gameMode == GAME_MODE_ENTER_NUM_DICE) {
    numDice = Number(input);
    gameMode = GAME_MODE_ENTER_GUESS;
    return `You have chosen to roll ${numDice} dice. Please enter a single guess for all of these dice.`;
  }
  // The following code assumes ENTER_GUESS game mode
  // because we return at the end of the previous if statement
  var userGuess = Number(input);

  // Store all dice rolls for each round so user can see how they won or lost.
  var diceRollsForEachRound = [];

  // Play numRounds rounds with a fixed number of dice and a fixed user guess
  var roundCounter = 0;
  for (var numRounds = 4; roundCounter < numRounds; roundCounter += 1) {
    // Initialise diceRolls array to store dice rolls for this round
    diceRolls = [];
    // Initialise hasUserWon to false for this round
    hasUserWon = false;
    // Increment number of rounds the user has played for win loss record
    numRoundsPlayed += 1;

    // Roll numDice number of dice
    for (var diceCounter = 0; diceCounter < numDice; diceCounter += 1) {
      var diceRoll = rollDice();
      // Store the current dice roll in diceRolls to show the user later
      diceRolls.push(diceRoll);
      // If dice roll matches user guess, store that user has won.
      if (diceRoll == userGuess) {
        hasUserWon = true;
      }
    }

    // Push the populated dice rolls array into the dice rolls for each round array
    diceRollsForEachRound.push(diceRolls);
    // Increment win counter if user has won
    if (hasUserWon) {
      numWins += 1;
    }
  }

  // After numRounds, reset mode to enter num dice so user can play again.
  gameMode = GAME_MODE_ENTER_NUM_DICE;

  // Output result and win-loss record.
  var numLosses = numRoundsPlayed - numWins;
  // .join converts an array to a string where each element is separated by the param to .join.
  return `
    You guessed ${userGuess} and the computer rolled ${diceRollsForEachRound.join(
    " | "
  )}. <br/><br/>
    Your win-loss record is ${numWins}-${numLosses}. <br/><br/>
    Please enter a number of dice to roll to start again.
  `;
};

/**
 * More Comfortable: Two Player Multi-Round Multi-Dice Game
 */

// Start with Player 1
var currPlayer = 1;
var player1NumRoundsPlayed = 0;
var player1NumWins = 0;
var player2NumRoundsPlayed = 0;
var player2NumWins = 0;

var incrementNumRoundsPlayed = function () {
  if (currPlayer == 1) {
    player1NumRoundsPlayed += 1;
  } else {
    player2NumRoundsPlayed += 1;
  }
};

var incrementNumWins = function () {
  if (currPlayer == 1) {
    player1NumWins += 1;
  } else {
    player2NumWins += 1;
  }
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  if (gameMode == GAME_MODE_ENTER_NUM_DICE) {
    numDice = Number(input);
    gameMode = GAME_MODE_ENTER_GUESS;
    return `Player ${currPlayer}: You have chosen to roll ${numDice} dice. Please enter a single guess for all of these dice.`;
  }
  // The following code assumes ENTER_GUESS game mode
  // because we return at the end of the previous if statement
  var userGuess = Number(input);

  // Store all dice rolls for each round so user can see how they won or lost.
  var diceRollsForEachRound = [];

  // Play numRounds rounds with a fixed number of dice and a fixed user guess
  var numRounds = 4;
  for (var roundCounter = 0; roundCounter < numRounds; roundCounter += 1) {
    // Initialise diceRolls array to store dice rolls for this round
    diceRolls = [];
    // Initialise hasUserWon to false for this round
    hasUserWon = false;
    // Increment number of rounds the user has played for win loss record
    incrementNumRoundsPlayed();

    // Roll numDice number of dice
    for (var diceCounter = 0; diceCounter < numDice; diceCounter += 1) {
      var diceRoll = rollDice();
      // Store the current dice roll in diceRolls to show the user later
      diceRolls.push(diceRoll);
      // If dice roll matches user guess, store that user has won.
      if (diceRoll == userGuess) {
        hasUserWon = true;
      }
    }

    // Push the populated dice rolls array into the dice rolls for each round array
    diceRollsForEachRound.push(diceRolls);
    // Increment win counter if user has won
    if (hasUserWon) {
      incrementNumWins();
    }
  }

  // After numRounds, reset mode to enter num dice so user can play again.
  gameMode = GAME_MODE_ENTER_NUM_DICE;

  // Output result and win-loss record.
  var player1NumLosses = player1NumRoundsPlayed - player1NumWins;
  var player2NumLosses = player2NumRoundsPlayed - player2NumWins;
  // If currPlayer is 1, nextPlayer is 2. If currPlayer is 2, nextPlayer is 1.
  var nextPlayer = (currPlayer % 2) + 1;
  // .join converts an array to a string where each element is separated by the param to .join.
  var outputValue = `
    Player ${currPlayer}: You guessed ${userGuess} and the computer rolled ${diceRollsForEachRound.join(
    " | "
  )}. <br/><br/>
    Player 1 win-loss record is ${player1NumWins}-${player1NumLosses}. <br/><br/>
    Player 2 win-loss record is ${player2NumWins}-${player2NumLosses}. <br/><br/>
    Player ${nextPlayer}: Please enter a number of dice to roll for your turn.
  `;

  // Update currPlayer to nextPlayer before next turn
  currPlayer = nextPlayer;

  return outputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
