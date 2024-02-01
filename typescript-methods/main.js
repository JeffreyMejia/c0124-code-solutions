'use strict';
const heroes = ['Batman', 'Thor', 'Flash', 'Spiderman'];
let randomNumber = Math.random();
randomNumber = 0.2699031024150891 * heroes.length;
let randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
let randomHero = heroes[randomIndex];
console.log("look, up there in the sky! It's", randomHero);
const library = [
  {
    title: "The Handmaid's Tale",
    author: 'Margret Atwood',
  },
  {
    title: "Old Man's War",
    author: 'John Scalzi',
  },
  {
    title: 'The Devil All The Time',
    author: 'Donald Ray Pollock',
  },
];
const lastBook = library.pop();
console.log('last book:', lastBook);
const firstBook = library.shift();
console.log('first book:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);
const fullName = 'Jeffrey Mejia Cortez';
const firstAndLastName = fullName.split(' ');
console.log('first and last name:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('say my name:', sayMyName);
const employee = {
  name: 'Michael Scott',
  age: 42,
  position: 'branch manager',
};
const employeeKeys = Object.keys(employee);
console.log('employee keys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employee values:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employee pairs:', employeePairs);
