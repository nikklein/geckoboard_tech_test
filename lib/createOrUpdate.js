var apiRequest = require('./apiRequest.js').apiRequest;

exports.createOrUpdate = function(apiUrl, dataSetName, currency) {
  apiRequest(apiUrl, dataSetName, currency);
}
