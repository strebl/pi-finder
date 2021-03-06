# Pi Finder [![Dependency Status](https://img.shields.io/david/strebl/pi-finder.svg?style=flat-square)](https://david-dm.org/strebl/pi-finder)
[![Pi Finder Overview](http://i.imgur.com/h9QasUC.png)](https://pi-finder.xyz "Visit the Pi Finder Website!")

## Description

This is a little helper to find your Raspberry Pi in a DHCP network.

## Installation
**You need to run all these commands on your Rasberry Pi.**

#### 1. Run the installer
```bash
$ wget http://bit.ly/pi-finder_installer -O - | sudo bash
```

##### Run this command only if the first failed!
If you haven't `wget` installed, try the curl command:
```bash
$ curl -fsSL http://bit.ly/pi-finder_installer | sudo bash
```

#### 2. Configure
Open the configuration file `config.js`...
```bash
$ sudo nano $(npm config get prefix)/lib/node_modules/pi-finder/config.js
# The real path could be /usr/lib/node_modules/pi-finder/config.js or /usr/local/lib/node_modules/pi-finder/config.js
```

...and change the name from `My Awesome Pi` to a name you'll recognise.
```javascript
module.exports = {
	// ...
	name: "Manuel's Pi",
	// ...
}
```

#### 3. Start Pi Finder
Add the pi finder to the start up
```bash
$ sudo service pi-finder start
```

#### 4. Reboot (optional)
To test the configuration, restart your Pi and check the [Pi Finder](https://pi-finder.xyz)!
```bash
$ sudo reboot
```

## Usage Linux

#### Start Pi Finder
```bash
$ sudo service pi-finder start
```

#### Stop Pi Finder
```bash
$ sudo service pi-finder stop
```

#### Restart Pi Finder
```bash
$ sudo service pi-finder restart
```

#### Status of the Pi Finder
```bash
$ sudo service pi-finder status
```


## Usage OS X

#### Start Pi Finder
```bash
$ sudo launchctl load /Library/LaunchDaemons/xyz.pi-finder.plist
```

#### Stop Pi Finder
```bash
$ sudo launchctl unload /Library/LaunchDaemons/xyz.pi-finder.plist
```

#### Restart Pi Finder
```bash
$ sudo launchctl unload /Library/LaunchDaemons/xyz.pi-finder.plist
$ sudo launchctl load /Library/LaunchDaemons/xyz.pi-finder.plist
```

#### Status of the Pi Finder
```bash
$ sudo launchctl list | grep xyz.pi-finder
```
If you see any output, the pi finder is running

### If you are using an old Pi Finder installation on OS X

#### Start Pi Finder
```bash
$ sudo launchctl load /Library/LaunchDaemons/ch.strebl.pi-finder.plist
```

#### Stop Pi Finder
```bash
$ sudo launchctl unload /Library/LaunchDaemons/ch.strebl.pi-finder.plist
```

#### Restart Pi Finder
```bash
$ sudo launchctl unload /Library/LaunchDaemons/ch.strebl.pi-finder.plist
$ sudo launchctl load /Library/LaunchDaemons/ch.strebl.pi-finder.plist
```

#### Status of the Pi Finder
```bash
$ sudo launchctl list | grep ch.strebl.pi-finder
```
If you see any output, the pi finder is running
