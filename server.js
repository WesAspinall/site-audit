const request = require('request');

let countries = require('./data/Countries.js');

let url = (arg) => `https://www.ups.com/${arg}/en/shipping/zones-and-rates/additional.page`;

countries.map((item) => {
    request
    .get(url(item.code))
    .on('response', function(response) {
     if(response.statusCode == 404){
         console.log(`\nadditional charges page not found in ${item.country}`)
     }
    })
});

