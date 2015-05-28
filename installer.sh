#!/usr/bin/env bash

# Declare colors
RS="\033[0m"    # reset
FGRD="\033[01;31m" # foreground red
FGRN="\033[01;32m" # foreground green
FBLE="\033[01;34m" # foreground blue

# Make sure only root can run our script
if [[ $EUID -ne 0 ]]; then
	echo -e "${FGRD}The pi-finder installer must be run as root!${RS}" 1>&2
	exit 1
fi

# Update sources
apt-get update

# Install curl
echo "Installing curl"
apt-get install curl

# Add Node.js sources
echo "Adding Node.js sources"
curl -sL https://deb.nodesource.com/setup | bash -

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

# Get the paths
nodejsdir=$(npm config get prefix)
packagepath="$nodejsdir/lib/node_modules/pi-finder"

# Move to init.d
echo "Moving init script"
mv $packagepath/init/pi-finder /etc/init.d/

# Change permissions
echo "Chaning init script permissions"
chmod 755 /etc/init.d/pi-finder

# Update rc.d
echo "Updating rc.d"
update-rc.d pi-finder defaults

echo
echo "${FBLE}Before you continue, change the name attribute in the config!${RS}"
echo "${FGRN}Run sudo nano $packagepath/config.js${RS}"
echo
