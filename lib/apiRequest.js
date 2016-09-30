var request = require('request');
var updateRates = require('./updateRates.js').updateRates;

exports.apiRequest = function(url, dataSetName, currency) {
    request(url, function(error, response, body) {

    var parsedBody = JSON.parse(body);

    updateRates(parsedBody, dataSetName, currency);
  })
}
