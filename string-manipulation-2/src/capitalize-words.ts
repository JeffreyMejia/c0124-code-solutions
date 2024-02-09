/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  const arr = string.split(' ');
  for (let i = 0; i < arr.length; i++) {
    const newWord = arr[i];
    const capitalize =
      newWord[0].toUpperCase() + newWord.slice(1).toLowerCase();
    arr[i] = capitalize;
  }
  return arr.join(' ');
}
