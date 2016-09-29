require('dotenv').config();
const api_key = process.env.API_KEY

var gb = require('geckoboard')(api_key);
var request = require('request');

const buy = 'buy'
const sell = 'sell'
var currency = 'USD'
var datasetName = currency.toLowerCase() +'_rates'
var parsedBody;
var timeStamp;
var buyRate;
var sellRate;
var apiUrl = "https://blockchain.info/ticker";

gb.ping(function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Authentication successful');
});

runProgramWithInterval();

function updateDataSet() {

  gb.datasets.findOrCreate(
    {
      id: datasetName,
      fields: {
        buy: {
          'type': 'money',
          'name': 'Buy ' + currency,
          'currency_code': currency
        },
        sell: {
          'type': 'money',
          'name': 'Sell ' + currency,
          'currency_code': currency
        },
        date: {
      'type': 'datetime',
      'name': 'Date'
    }
  }
    },

    function (err, dataset) {
      if (err) {
        console.error(err);
        return;
      }

      dataset.put(
        [
          { buy: buyRate, sell: sellRate, date: timeStamp }
        ],
        function (err) {
          if (err) {
            console.error(err);
            return;
          }

          console.log('Dataset created and data added');
        }
      );
    }
  )
}

function blockChainRequest(url) {

  request(url, function(error, response, body) {

    parsedBody = JSON.parse(body);
    current_time();
    updateBuyRate(currency);
    updateSellRate(currency);
});
};

function runProgramWithInterval() {
  createOrUpdate();
  setInterval(createOrUpdate, 60000);
}

function createOrUpdate() {
  blockChainRequest(apiUrl);
  updateDataSet();
};

function current_time(){
  timeStamp = new Date().toISOString();
}

function moneyToDecimals(currency, sellOrBuy){
  return Math.round(parsedBody[currency][sellOrBuy]) * 100;
}

function updateBuyRate(currency){
  buyRate = moneyToDecimals(currency, buy);
}
function updateSellRate(currency){
  sellRate = moneyToDecimals(currency, sell);
}
