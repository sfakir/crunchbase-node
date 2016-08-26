var key = require('../apikey.js');


var Crunchbase = require('../lib/main.js')
    , request = require('request')
    , _ = require('lodash');

var expect = require('chai').expect;


var crunchbase = new Crunchbase(key.key);


describe('CrunchBase Test Suite', function() {
    it('should load it successfully', function(done) {
        expect(crunchbase).not.toBe(null);
        done();
    });


    it('should fetch entity successfully', function(done) {

        crunchbase
            .getOne('organizations', '613ee49a7c9550518d0f5bd008169330')
            .on('complete',function(err, body) {
            // console.log(err,body);
            // expect(err).toBe(null);
            // expect(body).not.toBe(null);
            // expect(typeof body).toBe('string');
            // body = JSON.parse(body);
            // expect(body.name).toBe('Dropbox');
            done();
        });
    });
    //
    // it('should fetch entities successfully', function(done) {
    //     crunchbase.entities('companies', function(err, body) {
    //         expect(err).toBe(null);
    //         expect(body).not.toBe(null);
    //         expect(typeof body).toBe('string');
    //         done();
    //     });
    // });
    //
    // it('should search by query', function(done) {
    //     crunchbase.search({
    //         query: 'instagram'
    //     }, function(err, body) {
    //         expect(err).toBe(null);
    //         expect(body).not.toBe(null);
    //         expect(typeof body).toBe('string');
    //         body = JSON.parse(body);
    //         expect(body.total).toBeGreaterThan(0);
    //         expect(_.isArray(body.results)).toBeTruthy();
    //         done();
    //     })
    // });
    //
    // it('should search by query & entity', function(done) {
    //     crunchbase.search({
    //         query: 'instagram',
    //         entity: 'company'
    //     }, function(err, body) {
    //         expect(err).toBe(null);
    //         expect(body).not.toBe(null);
    //         expect(typeof body).toBe('string');
    //         body = JSON.parse(body);
    //         expect(_.isArray(body.results)).toBeTruthy();
    //         done();
    //     });
    // });
    //
    // it('should search by query, entity and field', function(done) {
    //     crunchbase.search({
    //         query: 'instagram',
    //         entity: 'company',
    //         field: 'homepage_url'
    //     }, function(err, body) {
    //         expect(err).toBe(null);
    //         expect(body).not.toBe(null);
    //         expect(typeof body).toBe('string');
    //         done();
    //     });
    // });
});