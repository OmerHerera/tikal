if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['src/index.js'] === 'undefined'){_$jscoverage['src/index.js']=[];
_$jscoverage['src/index.js'].source=['var async               = require(\'async\')',
'    , WS                = require(\'ws\')',
'    , config            = require(\'./config.json\')',
'    , colors            = require(\'colors\')',
'    , array_connections = []',
'    , count             = 0;',
'',
'',
'',
'function _createSingleConnection (options) {',
'    return function (callback) {',
'        var connection = new WS(options.url);',
'        connection.URL = options.url;',
'        connection.messages = options.messages;',
'',
'        connection.on(\'open\', function() {',
'            console.log(colors.green("---------------------------------------------------------------------------------------------------------"));',
'            console.log(colors.green("Connection Opened and sending to URL: " + connection.URL));',
'            connection.send(JSON.stringify(config.messages));',
'        });',
'',
'        connection.on(\'message\', function(message) {',
'            console.log(colors.yellow("Message Received from URL: " + connection.URL + " message: " + message));',
'            if (count < config.max_number_of_messages) {',
'                setTimeout(function () {',
'                    count ++;',
'                    connection.send(JSON.stringify(config.messages));',
'                }, config.delay_per_message);',
'            }',
'            else {',
'                callback();',
'            }',
'        });',
'',
'        connection.on(\'error\', function() {',
'            console.log(colors.red("---------------------------------------------------------------------------------------------------------"));',
'            console.log(colors.red("Exception, error from URL: " + connection.URL));',
'            callback(new Error("Error"));',
'        });',
'',
'        connection.on(\'close\', function () {',
'            console.log(colors.green("---------------------------------------------------------------------------------------------------------"));',
'            console.log(colors.green("Connection Closed"));',
'            callback();',
'        });',
'    };',
'}',
'',
'',
'function _start(done) {',
'    for (var index = 0; index < config.connections; index++) {',
'        array_connections.push(_createSingleConnection(config));',
'    }',
'',
'    async.parallelLimit(array_connections, config.async.limit, function (err, result) {',
'        if (err) {',
'            console.log(colors.red("An error occur in the parallelLimit"));',
'        }',
'        else {',
'            console.log(colors.green("Finnish Successfully"));',
'        }',
'',
'        done(err);',
'    });',
'}',
'',
'exports.start = function (done) {',
'    _start(done);',
'};',
'',
'exports.configure = function (cfg) {',
'    for (var key in cfg) {',
'        config[key] = cfg[key];',
'    }',
'};',
'_start();',
''];
_$jscoverage['src/index.js'][42]=0;
_$jscoverage['src/index.js'][1]=0;
_$jscoverage['src/index.js'][43]=0;
_$jscoverage['src/index.js'][13]=0;
_$jscoverage['src/index.js'][10]=0;
_$jscoverage['src/index.js'][11]=0;
_$jscoverage['src/index.js'][12]=0;
_$jscoverage['src/index.js'][18]=0;
_$jscoverage['src/index.js'][16]=0;
_$jscoverage['src/index.js'][14]=0;
_$jscoverage['src/index.js'][17]=0;
_$jscoverage['src/index.js'][27]=0;
_$jscoverage['src/index.js'][25]=0;
_$jscoverage['src/index.js'][24]=0;
_$jscoverage['src/index.js'][22]=0;
_$jscoverage['src/index.js'][23]=0;
_$jscoverage['src/index.js'][26]=0;
_$jscoverage['src/index.js'][19]=0;
_$jscoverage['src/index.js'][60]=0;
_$jscoverage['src/index.js'][35]=0;
_$jscoverage['src/index.js'][31]=0;
_$jscoverage['src/index.js'][63]=0;
_$jscoverage['src/index.js'][44]=0;
_$jscoverage['src/index.js'][36]=0;
_$jscoverage['src/index.js'][37]=0;
_$jscoverage['src/index.js'][41]=0;
_$jscoverage['src/index.js'][38]=0;
_$jscoverage['src/index.js'][68]=0;
_$jscoverage['src/index.js'][57]=0;
_$jscoverage['src/index.js'][56]=0;
_$jscoverage['src/index.js'][52]=0;
_$jscoverage['src/index.js'][55]=0;
_$jscoverage['src/index.js'][50]=0;
_$jscoverage['src/index.js'][51]=0;
_$jscoverage['src/index.js'][67]=0;
_$jscoverage['src/index.js'][71]=0;
_$jscoverage['src/index.js'][72]=0;
_$jscoverage['src/index.js'][73]=0;
_$jscoverage['src/index.js'][76]=0;
}_$jscoverage['src/index.js'][1]++;
var async               = require('async')
    , WS                = require('ws')
    , config            = require('./config.json')
    , colors            = require('colors')
    , array_connections = []
    , count             = 0;



_$jscoverage['src/index.js'][10]++;
function _createSingleConnection (options) {
    _$jscoverage['src/index.js'][11]++;
return function (callback) {
        _$jscoverage['src/index.js'][12]++;
var connection = new WS(options.url);
        _$jscoverage['src/index.js'][13]++;
connection.URL = options.url;
        _$jscoverage['src/index.js'][14]++;
connection.messages = options.messages;

        _$jscoverage['src/index.js'][16]++;
connection.on('open', function() {
            _$jscoverage['src/index.js'][17]++;
console.log(colors.green("---------------------------------------------------------------------------------------------------------"));
            _$jscoverage['src/index.js'][18]++;
console.log(colors.green("Connection Opened and sending to URL: " + connection.URL));
            _$jscoverage['src/index.js'][19]++;
connection.send(JSON.stringify(config.messages));
        });

        _$jscoverage['src/index.js'][22]++;
connection.on('message', function(message) {
            _$jscoverage['src/index.js'][23]++;
console.log(colors.yellow("Message Received from URL: " + connection.URL + " message: " + message));
            _$jscoverage['src/index.js'][24]++;
if (count < config.max_number_of_messages) {
                _$jscoverage['src/index.js'][25]++;
setTimeout(function () {
                    _$jscoverage['src/index.js'][26]++;
count ++;
                    _$jscoverage['src/index.js'][27]++;
connection.send(JSON.stringify(config.messages));
                }, config.delay_per_message);
            }
            else {
                _$jscoverage['src/index.js'][31]++;
callback();
            }
        });

        _$jscoverage['src/index.js'][35]++;
connection.on('error', function() {
            _$jscoverage['src/index.js'][36]++;
console.log(colors.red("---------------------------------------------------------------------------------------------------------"));
            _$jscoverage['src/index.js'][37]++;
console.log(colors.red("Exception, error from URL: " + connection.URL));
            _$jscoverage['src/index.js'][38]++;
callback(new Error("Error"));
        });

        _$jscoverage['src/index.js'][41]++;
connection.on('close', function () {
            _$jscoverage['src/index.js'][42]++;
console.log(colors.green("---------------------------------------------------------------------------------------------------------"));
            _$jscoverage['src/index.js'][43]++;
console.log(colors.green("Connection Closed"));
            _$jscoverage['src/index.js'][44]++;
callback();
        });
    };
}


_$jscoverage['src/index.js'][50]++;
function _start(done) {
    _$jscoverage['src/index.js'][51]++;
for (var index = 0; index < config.connections; index++) {
        _$jscoverage['src/index.js'][52]++;
array_connections.push(_createSingleConnection(config));
    }

    _$jscoverage['src/index.js'][55]++;
async.parallelLimit(array_connections, config.async.limit, function (err, result) {
        _$jscoverage['src/index.js'][56]++;
if (err) {
            _$jscoverage['src/index.js'][57]++;
console.log(colors.red("An error occur in the parallelLimit"));
        }
        else {
            _$jscoverage['src/index.js'][60]++;
console.log(colors.green("Finnish Successfully"));
        }

        _$jscoverage['src/index.js'][63]++;
done(err);
    });
}

_$jscoverage['src/index.js'][67]++;
exports.start = function (done) {
    _$jscoverage['src/index.js'][68]++;
_start(done);
};

_$jscoverage['src/index.js'][71]++;
exports.configure = function (cfg) {
    _$jscoverage['src/index.js'][72]++;
for (var key in cfg) {
        _$jscoverage['src/index.js'][73]++;
config[key] = cfg[key];
    }
};
_$jscoverage['src/index.js'][76]++;
_start();
