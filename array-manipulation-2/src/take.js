'use strict';
/* exported take */
function take(array, count) {
  const take1 = [];
  for (let i = 0; i < count; i++) {
    if (count > array.length) {
      return array;
    }
    take1.push(array[i]);
  }
  return take1;
}
