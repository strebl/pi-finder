#!/bin/bash

{
	NODEJS_INSTALLER_URL="https://raw.githubusercontent.com/coolaj86/node-install-script/master/setup-min.sh"

	##################
	# Declare colors #
	##################
	RS="\033[0m"		# reset
	FGRD="\033[31m"		# foreground red
	FGRN="\033[32m"		# foreground green
	FBLE="\033[34m"		# foreground blue

	#########################
	# Check for root rights #
	#########################
	if [ $EUID -ne 0 ]; then
		echo -e "${FGRD}The pi-finder installer must be run as root!${RS}" 1>&2
		exit 1
	fi

	##################################
	# Download the Node.js installer #
	# Copyright github.com/coolaj86  #
	##################################
	if [ -n "$(which curl)" ]; then
		curl --silent "${NODEJS_INSTALLER_URL}" \
			-o /tmp/install-nodejs.bash || echo 'error downloading Node.js setup script'
	elif [ -n "$(which wget)" ]; then
		wget --quiet "${NODEJS_INSTALLER_URL}" \
			-O /tmp/install-nodejs.bash || echo 'error downloading Node.js setup script'
	else
		echo "Found neither 'curl' nor 'wget'. Can't Continue."
		exit 1
	fi

	####################
	# Install Node.js  #
	####################
	echo "Installing Node.js as user ${SUDO_USER:-$USER}"
	sudo -i -u ${SUDO_USER:-$USER} bash /tmp/install-nodejs.bash

	# Install pi-finder
	echo "Installing pi-finder with npm"
	npm install -g pi-finder

	# Get the paths
	nodejsdir=$(npm config get prefix)
	packagepath="${nodejsdir}/lib/node_modules/pi-finder"

	if [ "$(uname | grep -i 'Darwin')" ]; then
		echo "Moving launchd file"
		mv $packagepath/init/pi-finder.osx /Library/LaunchDaemons/ch.strebl.pi-finder.plist

		echo "Changing launchd script permissions"
		chown root /Library/LaunchDaemons/ch.strebl.pi-finder.plist
	elif [ "$(uname | grep -i 'Linux')" ]; then
		# Move to init.d
		echo "Moving init script"
		mv ${packagepath}/init/pi-finder /etc/init.d/

		# Change permissions
		echo "Changing init script permissions"
		chmod 755 /etc/init.d/pi-finder

		# Create service user
		id -u "pi-finder" &>/dev/null || useradd -r -s /bin/false pi-finder

		# Update rc.d
		echo "Updating rc.d"
		update-rc.d pi-finder defaults
	else
		echo -e "${FGRD}Your OS is not supported.${RS}"
		echo -e "${FGRD}Please create a new issue: https://github.com/strebl/pi-finder/issues${RS}"
	fi

	echo ""
	echo -e "${FBLE}Before you continue, change the name attribute in the config!${RS}"
	echo -e "${FGRN}Run sudo nano $packagepath/config.js${RS}"
	echo ""
}
