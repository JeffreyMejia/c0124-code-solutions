'use strict';
/* exported initial */
function initial(array) {
  const initial1 = [];
  for (let x = 0; x < array.length - 1; x++) {
    initial1.push(array[x]);
  }
  return initial1;
}
