var currency = "USD";
var dataSetName = currency.toLowerCase() +'_rates';
var createOrUpdate = require('./lib/createOrUpdate.js').createOrUpdate;
var apiUrl = "https://blockchain.info/ticker";
var interval = 60000;

(function () {
  createOrUpdate(apiUrl, dataSetName, currency);
  setInterval(createOrUpdate, interval);
})();
