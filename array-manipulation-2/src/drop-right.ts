/* exported dropRight */
function dropRight(array: unknown[], count: number): unknown[] {
  const arr = [];
  for (let i = 0; i < array.length - count; i++) {
    arr.push(array[i]);
  }
  return arr;
}
