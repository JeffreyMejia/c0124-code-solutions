/* exported initial */
function initial(array: unknown[]): unknown[] {
  const initial1 = [];
  for (let x = 0; x < array.length - 1; x++) {
    initial1.push(array[x]);
  }
  return initial1;
}
