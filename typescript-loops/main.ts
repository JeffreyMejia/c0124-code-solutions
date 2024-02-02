/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber < 22) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (times >= count) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string: string): void {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers: number[]): number[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    const doubler = numbers[i] * 2;
    doubled.push(doubler);
  }
  return doubled;
}

function getKeys(object: Record<string, unknown>): string[] {
  const keys: string[] = [];
  for (const prop in object) {
    keys.push(prop);
  }
  return keys;
}

function getValues(object: Record<string, unknown>): unknown[] {
  const values: unknown[] = [];
  for (const val in object) {
    values.push(object[val]);
  }
  return values;
}
