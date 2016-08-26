/**
 * @author  Simon Fakir <simon@fakir-it.de>
 */

var config = require('../config')
    , _ = require('lodash')
    , rest = require('restler');

// @docs restler https://github.com/danwrong/restler

var validEntities = ['organizations', 'people', 'products', 'categories', 'locations', 'funding-rounds', 'acquisitions', 'ipos', 'funds'];
var Crunchbase = rest.service(function (key) {
    this.defaults = {};
    this.key = key;
    this.prefix = '/v/3/';
}, {
    baseURL: config.api_url
}, {
    getSave: function (url, opts) {
        opts = opts || {};
        opts.query = opts.query || {};
        opts.query.user_key = this.key;
        return this.get(this.prefix + url, opts);
    },
    getOne: function (type, id) {
        if (validEntities.indexOf(type) === -1) {
            throw new Error('Error type', type);
        }
        return this.getSave( type + '/' + id);
    },
    getMany: function (type, query) {

        return this.getSave( 'organizations', {query: query});
    }
});


module.exports = Crunchbase;

