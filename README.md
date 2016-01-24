```javascript
var assert = require('assert')
var parse = require('semantic-edition-parse')

assert.deepStrictEqual(
  parse('2e3u5c4d'),
  { edition: 2,
    update: 3,
    correction: 5,
    draft: 4 })
```
