module.exports = reviewersEditionParse

var components = require('./numbers')
var regularExpression = require('./regular-expression')

function reviewersEditionParse(argument) {
  var parsed = regularExpression.exec(argument)
  return components.reduce(
    function(returned, component, index) {
      var value = parsed[( index + 1 )]
      if (value !== undefined) {
        returned[component] = parseInt(value) }
      return returned },
    { }) }
