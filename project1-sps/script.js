/*  project for scissor , Stone ,Paper project
// generate the random number 1 to 3
// random object as array
// random number as index to get the random object*/
// Helper function to get coumputer output SISSIR OR PAPER OR STONEramdomly to
var getRandomObject = function () {
  var randomNum = Math.floor(Math.random() * 3);
  var ramdomObject = ["SCISSOR", "PAPER", "STONE"]; // \andom object array o= SCISSor 1 = paper  2 for ston
  var computerObject = ramdomObject[randomNum];
  console.log(randomNum);
  return computerObject;
};

// Declar Global variable declarion
var numberOfPlay = 0;
var numberOfWin = 0;
var numberOfloss = 0;
var numberOfDraw = 0;
var numberOfPlayerNameEntry = 0;
var gameMode = 0;
/*var percentOfWin = numberOfWin / numberOfPlay;
console.log(percentOfWin);
var percentOfLoss = numberOfloss / numberOfPlay;
console.log(percentOfLoss);
var percentOfDraw = numberOfDraw / numberOfPlay;
console.log(percentOfDraw);*/
var main = function (inputObject) {
  // check the number of Player name engry is not zero, computr wiil request to enter the user name
  if (numberOfPlayerNameEntry === 0) {
    var playerNameEntryMessage = "Please Enter your Player Name";
    numberOfPlayerNameEntry += 1;
    return playerNameEntryMessage;
  }
  if (numberOfPlayerNameEntry === 1) {
    var gameModeMessage =
      "Hello" +
      inputObject +
      "Please Enter Game Mode " +
      "<br>" +
      "Enter 1 for normal Scissors Paper Stone" +
      +"<br>" +
      "Enter 2 for muk-jji-ppa";
    numberOfPlayerNameEntry += 1;
    return gameModeMessage;
  }

  var computerObject = getRandomObject();
  // input vallidy check
  if (
    inputObject !== "SCISSOR" &&
    inputObject !== "PAPER" &&
    inputObject !== "STONE"
  ) {
    var myOutPutValue =
      inputObject +
      " It is ivalid entry Plase enter  SCCISSOR ot PAPER ot STONE ";
    return myOutPutValue;
  }
  if (
    (inputObject == "SCISSOR" && computerObject == "SCISSOR") ||
    (inputObject == "PAPER" && computerObject == "PAPER") ||
    (inputObject == "STONE" && computerObject == "STONE")
  ) {
    var bettingStatus = 0; // 0  equal to draw
    numberOfPlay += 1;
    numberOfWin += 0;
    numberOfloss += 0;
    numberOfDraw += 1;
    var percentOfWin = (numberOfWin * 100) / numberOfPlay;
    console.log(percentOfWin);
    var percentOfLoss = (numberOfloss * 100) / numberOfPlay;
    console.log(percentOfLoss);
    var percentOfDraw = (numberOfDraw * 100) / numberOfPlay;
    console.log(percentOfDraw);
  }
  if (
    (inputObject == "SCISSOR" && computerObject == "PAPER") ||
    (inputObject == "PAPER" && computerObject == "STONE") ||
    (inputObject == "STONE" && computerObject == "SCISSOR")
  ) {
    var bettingStatus = 1;
    numberOfPlay += 1;
    numberOfWin += 1;
    numberOfloss += 0;
    var percentOfWin = (numberOfWin * 100) / numberOfPlay;
    console.log(percentOfWin);
    var percentOfLoss = (numberOfloss * 100) / numberOfPlay;
    console.log(percentOfLoss);
    var percentOfDraw = (numberOfDraw * 100) / numberOfPlay;
    console.log(percentOfDraw);
  }
  if (
    (inputObject == "SCISSOR" && computerObject == "STONE") ||
    (inputObject == "PAPER" && computerObject == "SCISSOR") ||
    (inputObject == "STONE" && computerObject == "PAPER")
  ) {
    var bettingStatus = 2;
    numberOfPlay += 1;
    numberOfWin += 0;
    numberOfloss += 0;
    var percentOfWin = (numberOfWin * 100) / numberOfPlay;
    console.log(percentOfWin);
    var percentOfLoss = (numberOfloss * 100) / numberOfPlay;
    console.log(percentOfLoss);
    var percentOfDraw = (numberOfDraw * 100) / numberOfPlay;
    console.log(percentOfDraw);
  }
  // betting out put staus as array  index 0 draw , index= 1 win indexl 2= lo
  var outPutOfBettingStatus = [
    [
      " number play  " +
        numberOfPlay +
        " <br>" +
        "Draw and Input Object " +
        "<br>" +
        inputObject +
        "<br>" +
        "  ComputerObject = " +
        computerObject +
        "<br>" +
        " Wins = " +
        numberOfWin +
        "  (" +
        percentOfWin +
        "  %)" +
        " Losses  " +
        numberOfloss +
        " ( " +
        percentOfLoss +
        " % )" +
        "<br>" +
        "number of tie" +
        numberOfDraw +
        "please try again"
    ],
    [
      " number play" +
        numberOfPlay +
        "<br" +
        " You Win and U enter " +
        inputObject +
        " Computer generate = " +
        computerObject +
        "<br>" +
        " Wins = " +
        numberOfWin +
        "  (" +
        percentOfWin +
        "  %)"
    ],
    [
      " number play" +
        numberOfPlay +
        " <br>" +
        " You loss and Your input  " +
        inputObject +
        "   Computer generte is  " +
        computerObject +
        "<br>" +
        " Losses  " +
        numberOfloss +
        " ( " +
        percentOfLoss +
        " % )"
    ]
  ];
  myOutPutValue = outPutOfBettingStatus[bettingStatus];
  return myOutPutValue;
};
