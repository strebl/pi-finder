'use strict';

var ipMon = require('ip-monitor');

var request = require('request');

var mac = require('getmac');

var watcher = ipMon.createWatcher();

var piFinder = {
  host: 'http://pi.strebl.ch',
  path: '/api/v1/devices/poke',
  name: 'Manuel\'s Pi'
};

var pokeServer = function(macAddr, IP) {

	    var data = {
	    	url: piFinder.host + piFinder.path,
	    	formData: {
		    	ip: IP,
		    	mac: macAddr,
		    	name: piFinder.name
	    	}
	    };

	    request.post(data, function optionalCallback(err, httpResponse, body) {
			if (err) {
				return console.error('upload failed:', err);
			}
			console.log('httpResponse', httpResponse.statusCode);
			console.log('Upload successful!  Server responded with:', body);
		});
}

/*
Generic error event
*/
watcher.on('error', function (error) {
    throw error;
});

watcher.on('IP:success', function (IP) {

	mac.getMac(function(err, macAddr){

    	console.log('Got IP: %s', IP);

	    pokeServer(macAddr, IP);

	});

});

watcher.start();

process.on('SIGTERM', function () {
	if (!isWatching.isWatching) return;

	watcher.stop(function () {
		// Disconnect from cluster master
		process.disconnect && process.disconnect();
	});
});