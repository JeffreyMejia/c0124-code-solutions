'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds result:', convertMinutesToSeconds(7));
function greeting(name) {
  return 'Hello there ' + name + ' welcome to my home.';
}
console.log('greeting result:', greeting('Henry Cavill'));
const getArea = (width, height) => width * height;
console.log('getArea result:', getArea(7, 7));
const skater = { firstName: 'Tony', lastName: 'Hawk' };
const getFirstName = (person) => person['firstName'];
console.log('getFirstName result:', getFirstName(skater));
const arr1 = ['fee', 'fi', 'fo', 'fum'];
const getLastElement = (array) => array[array.length - 1];
console.log('getLastElement result:', getLastElement(arr1));
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(
  'callOtherFunction result:',
  callOtherFunction(convertMinutesToSeconds, 3)
);
