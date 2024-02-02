/* exported countdown */
function countdown(number: number): number[] {
  const numbers = [];
  for (let i = number; i >= 0; i--) {
    numbers.push(i);
  }
  return numbers;
}
