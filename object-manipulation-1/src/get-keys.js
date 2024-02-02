'use strict';
/* exported getKeys */
function getKeys(object) {
  const keys = [];
  for (let prop in object) {
    keys.push(prop);
  }
  return keys;
}
