const heroes: string[] = ['Batman', 'Thor', 'Flash', 'Spiderman'];
let randomNumber: number = Math.random();
randomNumber = 0.2699031024150891 * heroes.length;
const randomIndex: number = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log("look, up there in the sky! It's", randomHero);

interface Book {
  title: string;
  author: string;
}

const library: Book[] = [
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

const fullName: string = 'Jeffrey Mejia Cortez';
const firstAndLastName: string[] = fullName.split(' ');
console.log('first and last name:', firstAndLastName);
const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();
console.log('say my name:', sayMyName);

interface Employee {
  name: string;
  age: number;
  position: string;
}
const employee: Employee = {
  name: 'Michael Scott',
  age: 42,
  position: 'branch manager',
};

const employeeKeys: any = Object.keys(employee);
console.log('employee keys:', employeeKeys);

const employeeValues: any = Object.values(employee);
console.log('employee values:', employeeValues);

const employeePairs: any = Object.entries(employee);
console.log('employee pairs:', employeePairs);
