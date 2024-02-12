'use strict';
/* exported chunk */
function chunk(array, size) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (i % size === 0) {
      arr.push([array[i]]);
    } else {
      const remainder = arr[arr.length - 1];
      remainder.push(array[i]);
    }
  }
  return arr;
}
