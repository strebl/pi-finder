'use strict';

/*
Get the dependencies
*/
var ipMon   = require('ip-monitor');
var request = require('request');
var mac     = require('getmac');

/*
Load the configuration
*/
var config = require('../config');

/*
Create the watcher
*/
var watcher = ipMon.createWatcher();

var pokeServer = function(macAddr, IP) {

    var data = {
        url: config.pokeServer + config.pokePath,
        formData: {
            ip: IP,
            mac: macAddr,
            name: config.name
        }
    };

    if(config.group) {
        data.formData['group'] = config.group;
    };

    if(config.public) {
        data.formData['public'] = config.public;
    };

    request.post(data, function optionalCallback(err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('httpResponse', httpResponse.statusCode);
        console.log('Poke successful!  Server responded with:', body);
    });
}

/*
Generic error event
*/
watcher.on('error', function (error) {
    throw error;
});

/*
This happens on every IP lookup cicle
*/
watcher.on('IP:success', function (IP) {

    mac.getMac(function(err, macAddr){

        console.log('Got IP: %s', IP);

        pokeServer(macAddr, IP);

    });

});

watcher.start();

/*
Stop the watcher if we get a SIGTERM (kill -TERM <PID>)
*/
process.on('SIGTERM', function () {
    if (!isWatching.isWatching) return;

    watcher.stop(function () {
        // Disconnect from cluster master
        process.disconnect && process.disconnect();
    });
});