onmessage = function(e) {
  var args = e.data;
  var MAXIMUM_ROUNDS = (!args[0])? 1000000 : args[0];
  var fee = (!args[1])? 10 : args[1];
  var coinRecord = {}; // { "123": 10, "245": 145 .... }
  var totalEarning = 0;

  for (var currentRound = 0; currentRound < MAXIMUM_ROUNDS; currentRound++) {
    var coinAccumulation = 0, pow = 0;
    // 0 is negative, and 1 is positive
    while (((Math.random() / .5) & 1) == 0) {
      pow++;
    };
    coinAccumulation = Math.pow(2, pow);
    totalEarning += coinAccumulation;
    var property = "" + coinAccumulation; // fast converting integer to string
    coinRecord[property] = (!coinRecord[property])? 1 : coinRecord[property] + 1;
  };

  var totalCost = fee * MAXIMUM_ROUNDS;
  var earnPerRound = totalEarning / MAXIMUM_ROUNDS;

  console.log("Earn: " + totalEarning);
  console.log("Cost: " + totalCost);
  console.log("Earn per round: " + earnPerRound);

  // converting coinRecord to [ [123, 10], [245, 145] ]
  var distDataSet = [],
      properties = Object.keys(coinRecord);
  for (var i = 0; i < properties.length; i++) {
    distDataSet.push([parseFloat(properties[i]), coinRecord[properties[i]]]);
  };
  postMessage([distDataSet, totalEarning, totalCost, earnPerRound, MAXIMUM_ROUNDS, fee]);
  // console.log(distDataSet);
  close();
}