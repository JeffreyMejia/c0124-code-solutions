'use strict';
/* exported toObject */
function toObject(keyValuePairs) {
  const prop = keyValuePairs[0];
  const val = keyValuePairs[1];
  const object = {};
  object[prop] = val;
  return object;
}
