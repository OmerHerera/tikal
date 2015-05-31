var async               = require('async')
    , WS                = require('ws')
    , config            = require('./config.json')
    , colors            = require('colors')
    , array_connections = []
    , count             = 0;



function _createSingleConnection (options) {
    return function (callback) {
        var connection = new WS(options.url);
        connection.URL = options.url;
        connection.messages = options.messages;

        connection.on('open', function() {
            console.log(colors.green("---------------------------------------------------------------------------------------------------------"));
            console.log(colors.green("Connection Opened and sending to URL: " + connection.URL));
            connection.send(JSON.stringify(config.messages));
        });

        connection.on('message', function(message) {
            console.log(colors.yellow("Message Received from URL: " + connection.URL + " message: " + message));
            if (count < config.max_number_of_messages) {
                setTimeout(function () {
                    count ++;
                    connection.send(JSON.stringify(config.messages));
                }, config.delay_per_message);
            }
            else {
                callback();
            }
        });

        connection.on('error', function() {
            console.log(colors.red("---------------------------------------------------------------------------------------------------------"));
            console.log(colors.red("Exception, error from URL: " + connection.URL));
            callback(new Error("Error"));
        });

        connection.on('close', function () {
            console.log(colors.green("---------------------------------------------------------------------------------------------------------"));
            console.log(colors.green("Connection Closed"));
            callback();
        });
    };
}


function _start(done) {
    for (var index = 0; index < config.connections; index++) {
        array_connections.push(_createSingleConnection(config));
    }

    async.parallelLimit(array_connections, config.async.limit, function (err, result) {
        if (err) {
            console.log(colors.red("An error occur in the parallelLimit"));
        }
        else {
            console.log(colors.green("Finnish Successfully"));
        }

        done(err);
    });
}

exports.start = function (done) {
    _start(done);
};

exports.configure = function (cfg) {
    for (var key in cfg) {
        config[key] = cfg[key];
    }
};
_start();
