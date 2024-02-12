'use strict';
/* exported drop */
function drop(array, count) {
  const drop1 = [];
  for (let i = count; i < array.length; i++) {
    drop1.push(array[i]);
  }
  return drop1;
}
