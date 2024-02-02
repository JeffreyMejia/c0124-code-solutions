/* exported tail */
function tail(array: unknown[]): unknown[] {
  const tail1 = [];
  for (let x = 1; x < array.length; x++) {
    tail1.push(array[x]);
  }
  return tail1;
}
