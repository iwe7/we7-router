#!/usr/bin/env bash
readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
rm -rf dist

$(npm bin)/ng-packagr -p ./src/app/we7-router/package.json
$(npm bin)/ng-packagr -p ./src/app/we7-common/package.json
$(npm bin)/ng-packagr -p ./src/app/imeepos-tixian/package.json

