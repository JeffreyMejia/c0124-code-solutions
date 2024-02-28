'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
function isEven(value) {
  return value % 2 === 0;
}
const filtered = numbers.filter(isEven);
console.log(filtered);
function noD(string) {
  return !string.includes('d') && !string.includes('D');
}
const withoutD = names.filter(noD);
console.log(withoutD);
