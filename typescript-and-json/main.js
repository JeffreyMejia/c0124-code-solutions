'use strict';
const books = [
  {
    isbn: '9780002226240',
    title: 'What We Talk About When We Talk About Love',
    author: 'Raymond Carver',
  },
  {
    isbn: '9780679744399',
    title: 'All The Pretty Horses',
    author: 'Cormac McCarthy',
  },
  {
    isbn: '9780394800011',
    title: 'The Cat In The Hat',
    author: 'Dr. Suess',
  },
];
console.log('books:', books);
console.log('books typof:', typeof books);
const jason = JSON.stringify(books);
console.log('JSON string:', jason);
console.log('JSON typeof:', typeof jason);
const student = '{"id":70355760,"name":"Jason Java"}';
console.log('student:', student);
console.log('student typeof:', typeof student);
const jasonJava = JSON.parse(student);
console.log('result:', jasonJava);
console.log('result typeof:', typeof jasonJava);
