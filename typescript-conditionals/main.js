'use strict';
function isUnderFive(number) {
  let underFive;
  if (number < 5) {
    underFive = true;
  } else {
    underFive = false;
  }
  return underFive;
}
function isEven(number) {
  let even;
  if (number % 2 === 0) {
    even = true;
  } else {
    even = false;
  }
  return even;
}
function startsWithJ(string) {
  let withJ;
  if (string.charAt(0) === 'J') {
    withJ = true;
  } else {
    withJ = false;
  }
  return withJ;
}
const jeff = {
  name: 'Jeffrey Mejia Cortez',
  age: 30,
};
const stew = {
  name: 'Stewie Griffon',
  age: 1,
};
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrive(person) {
  let oldEnough;
  if (person.age >= 16) {
    oldEnough = true;
  } else {
    oldEnough = false;
  }
  return oldEnough;
}
isOldEnoughToDrive(jeff);
isOldEnoughToDrive(stew);
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16 && person.age >= 21) {
    return false;
  } else {
    return false;
  }
}
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      console.log("We're the Warner bros!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight, Everybody!');
  }
}
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log("you should definitely watch 'John Wick'");
      break;
    case 'comedy':
      console.log("you'll die from laughter when you watch 'Super Bad'");
      break;
    case 'horror':
      console.log(
        "you'll have an irrational fear of dolls after you watch 'Annabelle'"
      );
      break;
    case 'drama':
      console.log("I think you'd enjoy 'Whiplash'");
      break;
    case 'muscial':
      console.log("'Grease' is a classic");
      break;
    case 'sci-fi':
      console.log("'Star Wars'!...the original trilogy.");
      break;
    default:
      console.log(
        "don't be that person. please choose a genre from action, comedy, horror, drama, musical, or sci fi"
      );
  }
}
