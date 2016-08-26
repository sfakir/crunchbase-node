var Crunchbase = require('./lib/main.js')
    , _ = require('lodash')
    , key = require('./apikey.js');


var client = new Crunchbase(key.key);
client
    .getMany('organizations', {})
    .on('complete',function(result, response) {
        console.log(result.data.items[0]);
    });

