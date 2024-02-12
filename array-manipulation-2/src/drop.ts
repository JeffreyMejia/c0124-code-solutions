/* exported drop */
function drop(array: unknown[], count: number): unknown[] {
  const drop1 = [];
  for (let i = count; i < array.length; i++) {
    drop1.push(array[i]);
  }
  return drop1;
}
