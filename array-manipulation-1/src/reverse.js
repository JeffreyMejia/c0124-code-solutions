'use strict';
/* exported reverse */
function reverse(array) {
  const reverse1 = [];
  for (let x = array.length - 1; x >= 0; x--) {
    reverse1.push(array[x]);
  }
  return reverse1;
}
