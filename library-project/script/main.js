let myLibrary = [];

function Book(bookTitle, bookAuthor, bookPages, bookStatus) {
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
  this.bookPages = bookPages;
  this.bookStatus = false;
  this.updateStauts = function(bool) {
    return this.bookStatus = bool;
  }
}

function addBook(title, author, pages) {
  let book = new Book(title, author, pages);
  myLibrary.push(book);
}