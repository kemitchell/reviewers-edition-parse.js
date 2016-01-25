Reviewers editions are a simple way to number editions of useful prose
projects, like policy statements or legal terms.

# Numbers

Each reviewers edition has up to four numbers.

1. An _edition_ number

2. An _update_ number

3. A _correction_ number

4. A _draft_ number

Every reviewers edition has an _edition_ number. The _edition_ number
and any other numbers must be whole numbers, one or greater, written
without any leading zeros.

These numbers increase over time for new published versions of a
project. _Correction_ numbers restart at one for every new update, and
_update_ numbers restart at one for every new edition.

# Meaning

How the authors of a project change numbers over time conveys advice to
users of older editions.

1. When authors recommend users review a new edition in its entirety to
   ensure it meets their needs, they increase the _edition_ number.

   For example, if a working group rewrites the second edition of a
   form privacy notice from scratch, they will release the rewrite as
   the third edition of the form.

   Users of the first and second editions will know they should review
   the new third edition from top to bottom before substituting for the
   older, second edition.

2. When authors recommend users review at least the new or changed parts
   of a new edition, they increase the _update_ number.

   For example, if the working group adds a new paragraph to the third
   edition of its form privacy notice on location data, they will
   release the expanded policy as the third edition, first update. If
   they later rephrase a paragraph on genetic privacy, the will release
   the updated policy as the third edition, second update.

   Users of the original third edition will know to review at least the
   parts of the form that changed.

4. When authors make only typographic or other, minor corrections that
   users need not review, they increase the _correction_ number.

   For example, if the working group corrects a spelling error in the
   second edition, first update of their form, they will release the
   corrected form as second edition, first update, first correction. If
   they later catch and correct a typographical error, the resulting
   edition will be the second edition, first update, second correction.

   Users of the original second edition, first update will know the
   working group advises they can use the corrected editions without
   further review.

Authors can also use reviewers editions to mark drafts of a new edition,
update, or correction editions to come.

For example, if the working group publishes two drafts of a second
update to the third edition, those drafts will be the fourth edition,
first draft and fourth edition, second draft.

# Exported Module

This npm package exports a single function that parses reviewers edition
short code strings, returning structured representations of their
components.

```javascript
var parse = require('reviewers-edition-parse')
```

# Examples

The following examples are also the test suite for the parser. The tests
use Node.js' built-in `assert` module.

```javascript
var assert = require('assert')
```

The simplest reviewers edition has only an _edition_ number. This number
is written followed by the lower-case letter "u". So "second edition"
becomes `2e`:

```javascript
assert.deepStrictEqual(parse('2e'), { edition: 2 })
```

An _edition_ number cannot be zero, nor can it start with a zero.

```javascript
assert.equal(parse('0e'), false)
assert.equal(parse('01e'), false)
```

The fifth update to a second edition adds the number five followed by
the lower-case letter "u". So "second edition, fifth update" becomes
`2e5u`.

```javascript
assert.deepStrictEqual(parse('2e5u'), { edition: 2, update: 5 })
```

An _edition_ number cannot be zero, nor can it start with a zero.

```javascript
assert.equal(parse('2e0u'), false)
assert.equal(parse('2e01u'), false)
```

The seventh correction to that edition adds the number seven followed
by the lower-case letter "c". So "second edition, fifth update, seventh
correction" becomes `2e5u7c`.

```javascript
assert.deepStrictEqual(
  parse('2e5u7c'),
  { edition: 2, update: 5, correction: 7 })
```

An _correction_ number cannot be zero, nor can it start with a zero.

```javascript
assert.equal(parse('2e5u0c'), false)
assert.equal(parse('2e5u01c'), false)
```

An edition that has not been updated can also be corrected. So "third
edition, second correction" becomes `3e2c`.

```javascript
assert.deepStrictEqual(parse('3e2c'), { edition: 3, correction: 2 })
```

The first draft of a new fourth edition would use the reviewers edition
code for the fourth edition, followed by the number one and the
lower-case letter "d". So "fourth edition, first draft" becomes `4e1d`.

```javascript
assert.deepStrictEqual(parse('4e1d'), { edition: 4, draft: 1 })
```

Reviewers editions can similarly describe various drafts of new updates
and corrections. So "fourth edition, fifth update, first draft" becomes
`4e5u1d`.

```javascript
assert.deepStrictEqual(
  parse('4e5u1d'),
  { edition: 4, update: 5, draft: 1 })
```

And "fourth edition, fifth update, eighth correction, first draft"
becomes `4e5u8c1d`.

```javascript
assert.deepStrictEqual(
  parse('4e5u8c1d'),
  { edition: 4, update: 5, correction: 8, draft: 1 })
```

The parser function returns `false` for any invalid reviewers edition.

```javascript
assert.equal(parse('1.0.0'), false)
```

# Other Modules

An array of names for the numbers of reviewers editions are packaged as
a JSON file, and can be required separately.

```javascript
assert.deepStrictEqual(
  require('reviewers-edition-parse/numbers'),
  [ 'edition', 'update', 'correction', 'draft' ])
```

The regular expression used to parse strings can be also be required
separately.

```javascript
var re = require('reviewers-edition-parse/regular-expression')
assert(re.test('1e'))
```

The match groups of the regular expression correspond to the order of
number names.

```javascript
var match = re.exec('1e2u3c4d')
assert.equal(match[1], '1')
assert.equal(match[2], '2')
assert.equal(match[3], '3')
assert.equal(match[4], '4')
```
