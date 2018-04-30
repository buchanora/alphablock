const package = require('./package.json')
const semver = require('semver');

if (semver && semver.lt(package.version, "0.1.2")) {
  console.log('BEWARE!!!!!!! Versions below 0.1.2 are likely to to heavily bugged!')
}