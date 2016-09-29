require('dotenv').config();
const api_key = process.env.API_KEY

var gb = require('geckoboard')(api_key);

gb.ping(function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Authentication successful');
});

exports.updateDataSet = function(dataSetName, currency) {

  gb.datasets.findOrCreate(
    {
      id: dataSetName,
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
