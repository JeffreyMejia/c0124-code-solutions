'use strict';
/* exported getWords */
function getWords(string) {
  let splitString;
  if (string === '') {
    splitString = string.split('');
  } else {
    splitString = string.split(' ');
  }
  return splitString;
}
