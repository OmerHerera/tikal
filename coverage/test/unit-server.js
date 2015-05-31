var WebSocketServer   = require("ws").Server
    , wss

function _start () {
    console.log("unit-server started");
    wss = new WebSocketServer({url:"ws://127.0.0.1", port: 5001});
    wss.on('connection', function(ws) {
        console.log("connection");
        ws.on('message', function(message) {
            console.log('received: %s', message);
            ws.send('something');
        });
    });
}

function _stop () {
    console.log("unit-server stopped");
    wss.close();
}

exports.start = _start;
exports.stop = _stop;

_start();