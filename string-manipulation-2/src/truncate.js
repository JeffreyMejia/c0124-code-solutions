'use strict';
/* exported truncate */
function truncate(length, string) {
  let word = string.slice(0, length) + '...';
  return word;
}
