var parsedBody;
var timeStamp;
var buyRate;
var sellRate;

var createOrUpdate = require('./lib/createOrUpdate.js').createOrUpdate;

(function runProgramWithInterval() {
  createOrUpdate();
  setInterval(createOrUpdate, 60000);
})();
