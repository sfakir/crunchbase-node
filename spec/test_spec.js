var key = require('../apikey.js');


var Crunchbase = require('../lib/main.js')
    , _ = require('lodash');

var expect = require('chai').expect;
var assert = require('chai').assert;

var client = new Crunchbase(key.key);


describe('CrunchBase Test Suite', function () {
    it('should load it successfully', function (done) {
        assert.notEqual(client, null);
        expect(client).to.be.an('object');
        done();
    });


    it('should fetch organisation successfully', function (done) {
        client
            .getOne('organizations', 'ian-leaf-fraud')
            .on('complete', function (result, response) {
                expect(result).to.be.an('object');
                expect(result.data).to.be.an('object');
                expect(result.data.type).to.equal('Organization');
                done();
            });
    });
    
    it('should fetch organisation successfully', function (done) {
        client
            .getMany('organizations')
            .on('complete', function (result, response) {
                expect(result).to.be.an('object');
                expect(result.data).to.be.an('object');
                expect(result.data.items).to.be.instanceof(Array);
                expect(result.data.items[0].type).to.equal('OrganizationSummary');
                expect(result.data.items[0].properties.name).to.be.a('string');
                done();
            });
    });
    it('should fetch second page', function (done) {
        var params = {page: 2};
        client
            .getMany('organizations',params)
            .on('complete', function (result, response) {
                expect(result).to.be.an('object');
                expect(result.data).to.be.an('object');
                expect(result.data.items).to.be.instanceof(Array);
                expect(result.data.items[0].properties.name).to.be.a('string');
                expect(result.data.paging.current_page).to.equal(2);
                done();
            });
    });
});

