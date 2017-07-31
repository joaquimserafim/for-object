# for-object

a simple way to iterate through a plain js object

----
<a href="https://nodei.co/npm/for-object/"><img src="https://nodei.co/npm/for-object.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/for-object.svg?branch=master)](https://travis-ci.org/joaquimserafim/for-object)[![Coverage Status](https://coveralls.io/repos/github/joaquimserafim/for-object/badge.svg)](https://coveralls.io/github/joaquimserafim/for-object)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/for-object/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.x.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/for-object/blob/master/package.json#L43)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### api
`const forObject = require('for-object)`


### example

```js

forObject({ foo: 'bar', bar: 'foo' }, (value, key, index) => {
  // value
  // key
  // index
})
```


#### ISC License (ISC)
