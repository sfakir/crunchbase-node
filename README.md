crunchbase-node
===============
Wrapper on top of Crunchbase REST API in Node.js for crunchbase API v3.
Upgraded to Node 4.5 LTS.


## Getting Started

Wrapper can be downloaded from npm:

`npm install node-crunchbase-v3 --save`

Once installed, its easy to use it:

```javascript
var Crunchbase = require('node-crunchbase')
var client = new Crunchbase(key);

```

# Methods

```javascript

client.getMany(entityName, query);
client.getMany('organizations', {page: 2}); //example

client.getOne(entityName, id);

client.getOne('funding-rounds', 'ae8d7783f62c49c18f0f6774d473fa06');


```

# Processing responses

```javascript

client.getMany(..)
    .on('complete',function(result, response) {
        console.log(result.data);
    });

```

The response is a restler response object. See  restler docs here: [[https://github.com/danwrong/restler]].




            

# test

1.  open apikey.js and replace PUT_YOUR_KEY_FOR_TESTS_HERE with your key
2. run npm test


I'm in hurry! Please look at `spec/test_spec.js` in order to understand the usage.

## Contribution
This wrapper is solely written at `Kuew Inc` by [Hamza Waqas](http://github.com/ArkeologeN)