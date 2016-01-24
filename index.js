module.exports = semanticEditionParse

var EUCD = new RegExp(
  '^' +
  '([1-9][0-9]*)e' +
  '([1-9][0-9]*)u' +
  '([1-9][0-9]*)c' +
  '([1-9][0-9]*)d' +
  '$')

function semanticEditionParse(argument) {
  var parsed = EUCD.exec(argument)
  return {
    edition: parseInt(parsed[1]),
    update: parseInt(parsed[2]),
    correction: parseInt(parsed[3]),
    draft: parseInt(parsed[4]) } }
