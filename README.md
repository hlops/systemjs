#!/bin/bash

sudo npm install jspm -g

# install Node Version Manager to support multiply nodejs versions - see: https://github.com/creationix/nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
source ~/.bashrc

nvm install 5.0
nvm use 5.0
#nvm use system - to restore

sudo npm install jspm-server -g

jspm init
jspm install

jspm bundle src/main --inject --development --watch

npm install -g chokidar-socket-emitter

