'use strict';
/* exported oddOrEven */
function oddOrEven(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arr.push('even');
    } else {
      arr.push('odd');
    }
  }
  return arr;
}
