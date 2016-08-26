/**
 * @author  Simon Fakir <simon@fakir-it.de>
  */

var config = require('../config')
    , _ = require('lodash')
    , rest = require('restler');

// @docs restler https://github.com/danwrong/restler

var validEntities = ['organizations','people','products','categories','locations','funding-rounds','acquisitions','ipos','funds'];

var Crunchbase = rest.service(function (key) {
    this.defaults = {};
    this.defaults.key = key;

}, {
    baseURL: config.api_url
}, {
    getOne: function(type, id){
        if (validEntities.indexOf(type) === -1){
            throw new Error('Error type', type);
        }
    },
    getOrganisation: function (id, opt) {
        return this.get('/organizations/:id', {data: opt});
    },
    getOrganisations: function (opt) {
        return this.get('/organizations', {data: opt});
    }
});


module.exports = Crunchbase;

