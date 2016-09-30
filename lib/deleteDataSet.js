require('dotenv').config();
const api_key = process.env.API_KEY;
var gb = require('geckoboard')(api_key);

gb.datasets.delete("gbp_rates", function(){
    console.log("DELETED");
  });
