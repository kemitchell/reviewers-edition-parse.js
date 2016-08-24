module.exports = reviewersEditionParse

var components = require('./numbers')
var regularExpression = require('./regular-expression')

function reviewersEditionParse (argument) {
  var matches = regularExpression.exec(argument)
  if (matches) {
    return components.reduce(function (parsed, component, index) {
      var number = matches[index + 1]
      if (number !== undefined) {
        parsed[component] = parseInt(number)
      }
      return parsed
    }, {})
  } else {
    return false
  }
}
