'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let arr = string.split('');
  let type = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = type;
  let newWord = arr.join('');
  return newWord;
}
