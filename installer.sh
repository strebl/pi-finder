#!/usr/bin/env bash

# Update sources
apt-get update

# Install Node.js
echo "Installing Node.js"
apt-get install -y nodejs


# Create symlink if needed
if [ -e /usr/bin/nodejs ] && [ ! -e /usr/bin/node ]
  then
  	echo "Creating symlink"
    ln -s /usr/bin/nodejs /usr/bin/node
fi

# Install pi-finder
echo "Installing pi-finder with npm"
npm install -g https://github.com/strebl/pi-finder/tarball/master

# Get the paths 	# To extact the node path: nodepath=$(npm config get prefix)
packagepath="/usr/local/lib/node_modules/pi-finder"

# Move to init.d
echo "Moving init script"
mv "$packagepath/init/pi-finder /etc/init.d/pi-finder"

# Change permissions
echo "Chaning init script permissions"
chmod 755 /etc/init.d/pi-finder

# Update rc.d
echo "Updating rc.d"
update-rc.d pi-finder defaults

echo "Before you continue, change the name attribute in the config!"
echo "Run nano /usr/local/lib/node_modules/pi-finder/config.js"
