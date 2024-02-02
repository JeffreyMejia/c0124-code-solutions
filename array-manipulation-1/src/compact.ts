/* exported compact */
function compact(array: unknown[]): unknown[] {
  const compact1 = [];
  for (let x = 0; x < array.length; x++) {
    if (array[x]) {
      compact1.push(array[x]);
    }
  }
  return compact1;
}
