## Prerequisite

Curvytron runs on [node.js >= v0.10](https://nodejs.org/).
You need to install node on the machine that will run the Curvytron server.

## Installation

__Setup Environment__

    sudo apt-get update
    sudo apt-get install nodejs
    sudo apt-get install npm
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
    nvm install 0.12.7
    npm install -g bower gulp


__Clone the repository__

    git clone https://github.com/Elao/curvytron.git
    cd curvytron

__Install dependencies__

    npm install
    bower install

__Build the game__

    gulp

## Launch server

    node bin/curvytron.js

## Play

Go to [http://localhost:8080/](http://localhost:8080/)
Join a room, choose a player name and play!
