var apiRequest = require('./apiRequest.js').apiRequest;
const currency = 'GBP';
const dataSetName = currency.toLowerCase() +'_rates';
var updateDataSet = require('./updateDataSet.js').updateDataSet;
var apiUrl = "https://blockchain.info/ticker";

exports.createOrUpdate = function() {
  apiRequest(apiUrl, currency);
  updateDataSet(dataSetName, currency);
}
