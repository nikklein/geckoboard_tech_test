const buy = 'buy';
const sell = 'sell';

var updateCurrentTime = require('./updateCurrentTime.js').updateCurrentTime;

exports.updateRates = function updateRates(parsedBody, currency) {
  updateCurrentTime();
  updateBuyRate(currency);
  updateSellRate(currency);

  function moneyToDecimals(currency, sellOrBuy){
    return parsedBody[currency][sellOrBuy] * 100;
  }

  function updateBuyRate(currency){
    buyRate = moneyToDecimals(currency, buy);
  }
  function updateSellRate(currency){
    sellRate = moneyToDecimals(currency, sell);
  }
}
