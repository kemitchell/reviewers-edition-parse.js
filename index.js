module.exports = semanticEditionParse

var digit = '[1-9][0-9]*'

var EUCD = new RegExp(
  '^' +
  '(' + digit + ')e' +
  '(?:' +
    '(' + digit + ')u' +
    '(?:' +
      '(' + digit + ')c' + ')?' + ')?' +
  '(?:' +
    '(' + digit + ')d' + ')?' +
  '$')

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
