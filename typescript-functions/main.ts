function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log('convertMinutesToSeconds result:', convertMinutesToSeconds(7));

function greeting(name: string): string {
  return 'Hello there ' + name + ' welcome to my home.';
}
console.log('greeting result:', greeting('Henry Cavill'));

const getArea = (width: number, height: number): number => width * height;
console.log('getArea result:', getArea(7, 7));

interface Person {
  firstName: string;
  lastName: string;
}
const skater: Person = { firstName: 'Tony', lastName: 'Hawk' };
const getFirstName = (person: Person): string => person.firstName;
console.log('getFirstName result:', getFirstName(skater));

const arr1: string[] = ['fee', 'fi', 'fo', 'fum'];
const getLastElement = (array: string[]): string => array[array.length - 1];
console.log('getLastElement result:', getLastElement(arr1));

function callOtherFunction(otherFunction: any, params: unknown): any {
  return otherFunction(params);
}
console.log(
  'callOtherFunction result:',
  callOtherFunction(convertMinutesToSeconds, 3)
);
