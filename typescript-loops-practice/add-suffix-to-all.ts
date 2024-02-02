/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const arr = [];
  for (let i = 0; i < words.length; i++) {
    words[i] += suffix;
    arr.push(words[i]);
  }
  return arr;
}
