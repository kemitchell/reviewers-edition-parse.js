module.exports = semanticEditionParse

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

var components = [ 'edition', 'update', 'correction', 'draft' ]

function semanticEditionParse(argument) {
  var parsed = EUCD.exec(argument)
  var returned = { }
  components.forEach(function(component, index) {
    var group = ( index + 1 )
    var value = parsed[group]
    if (value !== undefined) {
      returned[component] = parseInt(value) } })
  return returned }
