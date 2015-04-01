
![Pi Finder Overview](http://i.imgur.com/h9QasUC.png)

## Before you start :
Be sure that you have **nodejs** installed!

If you don't, just run following command:
```sh
$ sudo apt-get install -y nodejs
```

## Installation

#### 1. Download the pi-finder-daemon
```sh
$ mkdir pi-finder-daemon && curl -sSL https://github.com/strebl/pi-finder-daemon/tarball/master | tar xzC pi-finder-daemon --strip-components=1 && cd pi-finder-daemon
```

#### 2. Install dependencies
```sh
$ sudo ln -s /usr/bin/nodejs /usr/bin/node
$ npm install
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
```sh
$ sudo mv init/pi-finder-daemon /etc/init.d/
$ sudo update-rc.d pi-finder-daemon defaults
```

#### 5. Start daemon
Add the pi finder to the start up
```sh
$ sudo /etc/init.d/pi-finder-daemon start
```

#### 6. Reboot (optional)
To test the configuration, restart your Pi and check the website!
```sh
$ sudo reboot
```

## Usage

#### Start the daemon
```sh
$ sudo service pi-finder-daemon start 
```

#### Stop the daemon
```sh
$ sudo service pi-finder-daemon stop 
```

#### Restart the daemon
```sh
$ sudo service pi-finder-daemon restart 
```

#### Status of the daemon
```sh
$ sudo service pi-finder-daemon status 
```