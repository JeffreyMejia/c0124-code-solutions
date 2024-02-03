/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
  const right1 = [];
  for (let i = array.length - count; i < array.length; i++) {
    if (count > array.length) {
      return array;
    }
    right1.push(array[i]);
  }
  return right1;
}
