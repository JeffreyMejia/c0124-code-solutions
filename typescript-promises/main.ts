import { takeAChance } from './take-a-chance.js';
const promise1 = takeAChance('Jeffrey');
promise1.then((message) => console.log(message));
promise1.catch((error) => console.log(error));
