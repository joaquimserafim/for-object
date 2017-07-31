/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const test = require('tape')

const forObject = require('./index')

test('should iterate through a plain js object returning `value, key, index`',
  function (assert) {
    let values = []
    let keys = []
    let indexes = []

    forObject({ foo: 'bar', bar: 'foo' }, (value, key, index) => {
      values.push(value)
      keys.push(key)
      indexes.push(index)
    })

    assert.deepEqual(values, ['bar', 'foo'], 'should return the values')
    assert.deepEqual(keys, ['foo', 'bar'], 'should return the keys')
    assert.deepEqual(indexes, [0, 1], 'should return the indexes')
    assert.end()
  }
)

test('should not throw with a bad plain js object', function (assert) {

  function ex () {
    forObject()
  }

  assert.doesNotThrow(ex, 'with a bad plain js object')
  assert.end()
})

test('should throw when the callback does not exist', function (assert) {

  function ex () {
    forObject({ foo: 'bar' })
  }

  assert.throws(ex, 'when the callback does not exist')
  assert.end()
})
