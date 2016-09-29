require('dotenv').config();
const api_key = process.env.API_KEY;
var gb = require('geckoboard')(api_key);
var createOrUpdate = require('./createOrUpdate.js').createOrUpdate;

gb.datasets.delete("undefined", function(){
    console.log("DELETED");
  });
