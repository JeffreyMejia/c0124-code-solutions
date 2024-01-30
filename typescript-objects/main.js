'use strict';
const student = {
  firstName: 'Jeffrey',
  lastName: 'Mejia Cortez',
  age: 30,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Behavioral Therapist';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
const vehicle = {
  make: 'Pontiac',
  model: 'GTO Judge',
  year: 1972,
};
const pet = {
  name: 'Jayce',
  kind: 'Dog',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
vehicle['color'] = 'orange';
vehicle['isConvertible'] = false;
console.log('value of vehicle[color]:', vehicle['color']);
console.log('value of vehicle[isConvertible]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
