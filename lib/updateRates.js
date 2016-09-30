const buy = 'buy';
const sell = 'sell';
var updateCurrentTime = require('./updateCurrentTime.js').updateCurrentTime;
var updateDataSet = require('./updateDataSet.js').updateDataSet;


exports.updateRates = function updateRates(parsedBody, dataSetName, currency) {
  var timeStamp = updateCurrentTime();
  var buyRate = updateBuyRate(currency);
  var sellRate = updateSellRate(currency);
  updateDataSet(timeStamp, buyRate, sellRate, dataSetName, currency);

  function moneyToCoins(currency, sellOrBuy){
    var currentRate = parsedBody[currency][sellOrBuy];

    var rateToCoins = currentRate * 100;

    if (Math.round(rateToCoins) !== rateToCoins) {
      return Math.round(rateToCoins);
    } else {
      return rateToCoins;
      }
  }

  function updateBuyRate(currency){
    return moneyToCoins(currency, buy);
  }
  function updateSellRate(currency){
    return moneyToCoins(currency, sell);
  }
}
