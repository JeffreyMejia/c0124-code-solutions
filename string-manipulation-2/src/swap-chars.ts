/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  const arr = string.split('');
  const type = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = type;
  const newWord = arr.join('');
  return newWord;
}
