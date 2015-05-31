var should      = require('chai').should()
    , expect    = require('chai').expect
    , assert    = require('chai').assert
    , should    = require('chai').should()
    , index     = require('./../src/index')
    , config    = require('./../src/config.json')
    , server    = require('./unit-server')


describe('tikal functionality', function () {

    before(function() {
        //server.start();
        index.configure({
            "url": "ws://127.0.0.1:5001"
        });
    });

    after(function(){
    });

    it('index methods', function () {
        index.start.should.be.a('function');
    });

    it('invoking methods', function (done) {
        index.start();
        done();
    });

    //it('invoking methods', function () {
    //    server.stop();
    //
    //});
});
