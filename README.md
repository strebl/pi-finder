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

#### 3. Start the Daemon
```sh
$ pi-finder-daemon/bin/pi-finder-daemon
```

## Usage
**Note:** This is just temporary! Better solution will follow soon(tm)!

#### Start the daemon
Run the pi-finder-daemon
```sh
$ cd /path/to/pi-finder-daemon
$ ./pi-finder-daemon
```

#### Start the daemon
Run the pi-finder-daemon
```sh
$ cd /path/to/pi-finder-daemon
$ ./pi-finder-daemon
```

#### Stop the daemon
First you need the PID
```sh
$ ps -axf | grep pi-finder-daemon
```

You'll get something like this:
```
501 37818     1   0   ...pi-finder-daemon...
501 41226 37818   0   ...pi-finder-daemon...
```

The PID **37818** is the one we are looking for in this case.

Now you can gracefully shutdown the daemon:
```sh
$ kill -TERM 37818 # (replace 37818 with your daemon PID)
```

#### Restart the daemon
First you need the PID
```sh
$ ps -axf | grep pi-finder-daemon
```

You'll get something like this:
```
501 37818     1   0   ...pi-finder-daemon...
501 41226 37818   0   ...pi-finder-daemon...
```

The PID **37818** is the one we are looking for in this case.

Now you can gracefully shutdown the daemon:
```sh
$ kill -HUP 37818 # (replace 37818 with your daemon PID)
```