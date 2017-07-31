/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

module.exports = forObject

function forObject (obj, next) {
  var i = 0
  for (var key in obj) next(obj[key], key, i++)
}
