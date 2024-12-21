let books = [
  {
    id: 1,
    title: '1984',
    author: 'Gorge',
  },
  {
    id: 2,
    title: 'The great gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    id: 3,
    title: 'Pride and Prejustice',
    author: 'Jane Austen',
  },
  {
    id: 4,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
];

function getAllBooks() {
  return books;
}

function getBookById(bookId) {
  return books.find((book) => book.id === bookId);
}

function addBook(book) {
  let newBook = {
    id: books.length,
    ...book,
  };
  books.push(newBook);
  return newBook;
}

module.exports = { getAllBooks, getBookById, addBook };
