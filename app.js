var currency = "USD";
var dataSetName = currency.toLowerCase() +'_rates';
var createOrUpdate = require('./lib/createOrUpdate.js').createOrUpdate;
var apiUrl = "https://blockchain.info/ticker";

(function () {
  createOrUpdate(apiUrl, dataSetName, currency);
  setInterval(createOrUpdate, 60000);
})();
