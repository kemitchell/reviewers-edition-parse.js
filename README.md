```javascript
var assert = require('assert')
var parse = require('semantic-edition-parse')

assert.deepStrictEqual(
  parse('2e'),
  { edition: 2 })

assert.deepStrictEqual(
  parse('2e5u'),
  { edition: 2,
    update: 5 })

assert.deepStrictEqual(
  parse('2e5u7c'),
  { edition: 2,
    update: 5,
    correction: 7 })

assert.deepStrictEqual(
  parse('2e3u5c4d'),
  { edition: 2,
    update: 3,
    correction: 5,
    draft: 4 })

assert.deepStrictEqual(
  parse('4e1d'),
  { edition: 4,
    draft: 1 })

assert.deepStrictEqual(
  parse('4e5u1d'),
  { edition: 4,
    update: 5,
    draft: 1 })

assert.deepStrictEqual(
  parse('4e5u8c1d'),
  { edition: 4,
    update: 5,
    correction: 8,
    draft: 1 })
```
