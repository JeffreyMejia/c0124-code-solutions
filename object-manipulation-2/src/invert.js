'use strict';
/* exported invert */
function invert(source) {
  let object = {};
  for (let key in source) {
    object[source[key]] = key;
  }
  return object;
}
