/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  if (word.toUpperCase() === word) {
    return true;
  } else {
    return false;
  }
}
