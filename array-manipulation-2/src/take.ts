/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const take1 = [];
  for (let i = 0; i < count; i++) {
    if (count > array.length) {
      return array;
    }
    take1.push(array[i]);
  }
  return take1;
}
