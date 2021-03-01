let myLibrary = [
  {
    bookTitle: "The Outsiders",
    bookAuthor: "S. E. Hinton",
    bookDesc: "The Outsiders is a coming-of-age novel by S. E. Hinton, first published in 1967 by Viking Press. Hinton was 15 when she started writing the novel but did most of the work when she was 16 and a junior in high school. Hinton was 18 when the book was published.",
    bookPages: "172",
    bookStatus: false
  }
];
let myForm = document.getElementById("myForm");
let modal = document.getElementById("modal");
let library = document.querySelector('.book-list');

let $name = document.querySelector('#bname');
let $author = document.querySelector('#bauthor');
let $desc = document.querySelector('#bdesc');
let $pageCount = document.querySelector('#bpages');

window.addEventListener('load', (event) => {
  render();
})

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addBook($name.value, $author.value, $desc.value, $pageCount.value);
  toggleModal();
  render();
})

function render() {
  let x = document.getElementsByClassName('book-card');

  for (i = x.length; i < myLibrary.length; i++) {
    let myDiv = document.createElement('div');
    myDiv.innerHTML = `
    <div class="book-card">
      <h1>${myLibrary[i].bookTitle}</h1>
      <p>${myLibrary[i].bookAuthor}</p>
      <p>${myLibrary[i].bookDesc}</p>
      <p>${myLibrary[i].bookPages} Pages</p>
    </div>
    `;
    library.appendChild(myDiv);
  }
}

function Book(bookTitle, bookAuthor, bookDesc, bookPages, bookStatus) {
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
  this.bookDesc = bookDesc;
  this.bookPages = bookPages;
  this.bookStatus = false;
  this.updateStauts = function(bool) {
    return this.bookStatus = bool;
  }
}

function addBook(title, author, desc, pages) {
  let book = new Book(title, author, desc, pages);
  myLibrary.push(book);
}

function toggleModal() {
  if (!modal.classList.contains('modal-active')) {
    modal.classList.add('modal-active');
  } else {
    modal.classList.remove('modal-active');
  }
}