# Pi Finder [![Dependency Status](https://david-dm.org/strebl/pi-finder.svg)](https://david-dm.org/strebl/pi-finder)
[![Pi Finder Overview](http://i.imgur.com/h9QasUC.png)](https://pi.strebl.ch "Visit the Pi Finder Website!")

## Description

This is a little helper to find your Raspberry Pi in a DHCP network.

## Installation
**You need to run all these commands on your Rasberry Pi.**

#### 1. Run the installer
```bash
$ wget http://bit.ly/pi-finder_installer -O - | sudo sh
```

#### 2. Configure
Open the configuration file `config.js`...
```bash
$ sudo nano /usr/lib/node_modules/pi-finder/config.js
```

...and change the name from `My Awesome Pi` to a name you'll recognise.
```js
module.exports = {
	// ...
	name: "Manuel's Pi",
	// ...
}
```

#### 3. Start Pi Finder
Add the pi finder to the start up
```bash
$ sudo /etc/init.d/pi-finder start
```

#### 4. Reboot (optional)
To test the configuration, restart your Pi and check the [Pi Finder](https://pi.strebl.ch)!
```bash
$ sudo reboot
```

## Usage

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
