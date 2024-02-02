'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let reverse1 = '';
  for (let x = word.length - 1; x >= 0; x--) {
    reverse1 += word[x];
  }
  return reverse1;
}
