'use strict';
/* exported isVowel */
function isVowel(character) {
  if (character === 'a' || character === 'A') {
    return true;
  } else if (character === 'e' || character === 'E') {
    return true;
  } else if (character === 'i' || character === 'I') {
    return true;
  } else if (character === 'o' || character === 'O') {
    return true;
  } else if (character === 'u' || character === 'U') {
    return true;
  } else {
    return false;
  }
}
