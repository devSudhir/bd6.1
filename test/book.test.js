const { getAllBooks, getBookById, addBook } = require("../book.js");
// const { describe, it } = require("node:test");

describe("Books apis", () => {
  it("Should return all the books", () => {
    let books = getAllBooks();
    expect(books.length).toBe(4);
  });
  it("Should give all the book infos", () => {
    let books = getAllBooks();
    expect(books).toEqual([
      {
        id: 1,
        title: "1984",
        author: "Gorge",
      },
      {
        id: 2,
        title: "The great gatsby",
        author: "F. Scott Fitzgerald",
      },
      {
        id: 3,
        title: "Pride and Prejustice",
        author: "Jane Austen",
      },
      {
        id: 4,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
      },
    ]);
  });

  it("Should return a book by id", () => {
    let book = getBookById(1);
    expect(book).toEqual({
      id: 1,
      title: "1984",
      author: "Gorge",
    });

    book = getBookById(10);
    expect(book).toBeUndefined();
  });

  it("Should add a new book", () => {
    let book = {
      title: "1996",
      author: "sudhir",
    };
    const newBookAdded = addBook(book);
    expect(newBookAdded).toEqual({ id: 5, ...book });

    const books = getAllBooks();
    expect(books.length).toBe(5);
  });
});
