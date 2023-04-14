/*
const bookObject = {
  title: 'Title : The Lord of the Rings',
  author: 'Author : J. R. R. Tolkien',
  genre: 'Genre : High fantasy, Adventure',
  publicationDate: 'Publication date : 1954',
  numberOfPages: 'Number of pages : Thousands',
  language: 'English'
}
*/

let myLibrary = [];

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const bookTitle = document.getElementById('book-title').value;
  const bookAuthor = document.getElementById('book-author').value;
  const bookGenre = document.getElementById('book-genre').value;
  const isRead = document.getElementById('read-checkbox').checked;

  const addedBook = new Book(bookTitle, bookAuthor, bookGenre, isRead);

  myLibrary.push(addedBook);

  console.log(myLibrary);

  console.log(`${bookTitle}, by ${bookAuthor} is a ${bookGenre} book. Read ? ${isRead}`)
})

function Book(title, author, genre, isRead) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.isRead = isRead;
}

function addBookToLibrary() {

}
/*
const newBook = new Book('One Piece', 'Oda', 'Shonen', '0000', '0000', 'Japanese');
*/