# Pi Finder
[![Pi Finder Overview](http://i.imgur.com/h9QasUC.png)](https://pi.strebl.ch "Visit the Pi Finder Website!")

## Description

This is a little helper to find your Raspberry Pi in a DHCP network.

## Installation

#### 1. Download the pi-finder
```bash
$ sudo wget https://raw.githubusercontent.com/strebl/pi-finder/master/installer.sh -O - | sh
```

#### 3. Configuration
Open config.js an change the name from `My Awesome Pi` to a name you'll recognise.
```js
module.exports = {
	// ...
	name: "Manuel's Pi",
	// ...
}
```

#### 4. Start on system boot
Add the pi finder to the start up
```bash
$ sudo mv init/pi-finder-daemon /etc/init.d/
$ sudo update-rc.d pi-finder-daemon defaults
```

#### 5. Start daemon
Add the pi finder to the start up
```bash
$ sudo /etc/init.d/pi-finder-daemon start
```

#### 6. Reboot (optional)
To test the configuration, restart your Pi and check the [Pi Finder](https://pi.strebl.ch)!
```bash
$ sudo reboot
```

## Usage

#### Start the daemon
```bash
$ sudo service pi-finder-daemon start 
```

#### Stop the daemon
```bash
$ sudo service pi-finder-daemon stop 
```

#### Restart the daemon
```bash
$ sudo service pi-finder-daemon restart 
```

#### Status of the daemon
```bash
$ sudo service pi-finder-daemon status 
```