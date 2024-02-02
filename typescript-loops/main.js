'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber < 22) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (times >= count) {
    repeated += word;
    count++;
  }
  return repeated;
}
function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    let doubler = numbers[i] * 2;
    doubled.push(doubler);
  }
  return doubled;
}
function getKeys(object) {
  const keys = [];
  for (let prop in object) {
    keys.push(prop);
  }
  return keys;
}
function getValues(object) {
  const values = [];
  for (let val in object) {
    values.push(object[val]);
  }
  return values;
}
