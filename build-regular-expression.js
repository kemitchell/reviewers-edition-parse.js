var captureDigit = '([1-9][0-9]*)'

var EUCD = new RegExp(
  '^' +
  captureDigit + 'e' +
  optional(
    captureDigit + 'u' +
    optional(captureDigit + 'c')) +
  optional(captureDigit + 'd') +
  '$')

function optional(reString) {
  return ( '(?:' + reString + ')?' ) }

process.stdout.write(( 'module.exports = ' + EUCD + '\n' ))
