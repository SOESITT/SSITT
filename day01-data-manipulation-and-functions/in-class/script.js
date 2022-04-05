var fahrenheitToCelsiusMainFormula = function (number) {
  return ((number - 32) * 5) / 9;
};
var fahrenheitToCelsiusMain = function (fahrenheitInput) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var celciusOutput = fahrenheitToCelsiusMainFormula(fahrenheitInput); //formula Celcius = (Fahrenheit-32) x 5/9
  return "celcius" + celciusOutput;
};

var roadTripCostBaseMain = function (km) {
  var fuelCost = 2.2;
  var milePerLiter = 9;
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var roadTripCost = (km / milePerLiter) * fuelCost; //9 miles/litre of fuel. Fuel costs $2.20/litre.
  return roadTripCost;
};

var roadTripCostComfortableMain = function (kmTrain) {
  var fuelcostSavingPerLiter = 2.2 - 2.0;
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var costSavingByTrain = (kmTrain / 9) * fuelcostSavingPerLiter;
  return " f cost saving traviling by train " + costSavingByTrain;
};

var iceMachineMain = function (numberOfguest) {
  var convertionGmToPound = 0.0022;
  var drinkPerGuest = 2;
  var cubePerDrink = 4;
  var weightOfcube = 0.15;
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var iceMachineRunHour =
    1 /
    (numberOfguest *
      drinkPerGuest *
      cubePerDrink *
      weightOfcube *
      convertionGmToPound);
  return "duration the ice machine needs to run  " + iceMachineRunHour;
};

var beerOrderMain = function (numCustomerParDay) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var numOfKegBeer = (numCustomerParDay * 2) / 124;
  return " number of kegs the bar s per quarter" + numOfKegBeer;
};

var cellularDataMain = function (usedGB) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var paidPerGb = 19.99 / usedGB;
  return paidPerGb;
};
