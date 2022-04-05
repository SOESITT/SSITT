var main = function (input) {
  var myOutputValue = input;
  return myOutputValue;
};

var greetingMain = function (name) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue =
    "Hello" +
    name +
    "! Wow" +
    name +
    " Susan is a great name. Reminds me of this movie star...";
  return myOutputValue;
};

var metricMain = function (distanceInKm) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var myOutMile = distanceInKm * 0.62;
  return myOutMile;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var trainSpeedMain = function (delayTime) {
  // Attempt tthe Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var myOutputTrain2Speed = 200 / (2 - delayTime); //distance devide by time for Train 2
  return myOutputTrain2Speed;
};

var clockMain = function (inputMin) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputAngleHourMin = (1 / 12 - inputMin / 60) * 360;
  return myOutputAngleHourMin;
};
