'use strict';
/* exported omit */
function omit(source, keys) {
  let object = {};
  for (let prop in source) {
    if (!keys.includes(prop)) {
      object[prop] = source[prop];
    }
  }
  return object;
}
