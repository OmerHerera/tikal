# tikal
![image](logo.png)

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/OmerHerera/tikal.svg?branch=master)](https://travis-ci.org/OmerHerera/tikal)
[![Code Climate](https://codeclimate.com/github/OmerHerera/tikal/badges/gpa.svg)](https://codeclimate.com/github/OmerHerera/tikal)
[![Coverage Status](https://coveralls.io/repos/OmerHerera/badges/badge.svg?branch=master)](https://coveralls.io/r/OmerHerera/badges?branch=master)
[![Dependency Status](https://david-dm.org/OmerHerera/tikal.svg?theme=shields.io)](https://david-dm.org/OmerHerera/tikal)
[![devDependency Status](https://david-dm.org/OmerHerera/tikal/dev-status.svg?theme=shields.io)](https://david-dm.org/OmerHerera/tikal#info=devDependencies)
[![npm version](https://badge.fury.io/js/tikal.svg)](http://badge.fury.io/js/tikal)
[![npm downloads](https://img.shields.io/npm/dm/tikal.svg)](https://img.shields.io/npm/dm/tikal.svg)
[![NPM](https://nodei.co/npm/tikal.png)](https://nodei.co/npm/tikal/)

#Description

Small Utility for testing WebSocket in nodejs testing concurrent connections.
The utility will connect in parrallel to rhe given number of connections
The utility contains a single file where all the work its done.
The utility will connect to the url set in the config.json file
All the configuration its done in the config.json file


* * *

#Use
1. Change the config file with your configuration

```
{
  "url": "ws://127.0.0.1:5001",
  "connections": 100,
  "delay_per_message": 5000,
  "messages": {
    "name": "REQ",
    "method": "GET",
    "url": "https://jsonresponser.herokuapp.com/api/json/users"
  },
  "async": {
    "limit": 500
  }
}
``` 

## config.json

- `url` - fully qualified for web socket server including its port if need it
- `connections` - number of concurrent connections to createa
- `delay_per_message` number of milliseconds to wait after getting response from the server and sending a new message
- `messages` - message to be sended to server, it will be stringify beforw sending, so its possible to send objects
- `async.limit` - The maximum connections to run at any time

2. Run the utility under ```src``` folder ```index.js``` file  
