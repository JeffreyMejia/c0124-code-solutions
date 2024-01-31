interface Book {
  isbn: string;
  title: string;
  author: string;
}

const bookshelf: Book[] = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];

console.log(
  'The author of the second book on the bookshelf is',
  bookshelf[1].author
);
console.log(`Bookstore Manager: "Can you tell me the isbn of that the first book on the shelf there?"
Bookstore employee: "Yeah sure, the isbn is ${bookshelf[0].isbn}."
Manager: "Thank you and by the way let's talk about your raise."
`);
console.log(`The title of the third book is ${bookshelf[2].title}.`);
