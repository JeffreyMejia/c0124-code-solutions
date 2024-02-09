'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  let arr = string.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let newWord = arr[i];
    let capitalize = newWord[0].toUpperCase() + newWord.slice(1).toLowerCase();
    arr[i] = capitalize;
  }
  return arr.join(' ');
}
