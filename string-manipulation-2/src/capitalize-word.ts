/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  const cap = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return cap;
}
