'use strict';
/* exported pick */
function pick(source, keys) {
  let object = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      object[keys[i]] = source[keys[i]];
    }
  }
  return object;
}
