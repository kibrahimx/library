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

  console.log(`Title : ${bookTitle}, Author : ${bookAuthor}, Genre : ${bookGenre}, isRead ${isRead}.`)

  const addedBookGrid = document.createElement('div');

  addedBookGrid.classList.add('book');
  addedBookGrid.classList.add('flex');
  addedBookGrid.classList.add('column');

  const addedBookGridTitleSpan = document.createElement('span');
  addedBookGridTitleSpan.textContent = bookTitle;
  addedBookGridTitleSpan.classList.add('book-title');

  const addedBookGridAuthorSpan = document.createElement('span');
  addedBookGridAuthorSpan.textContent = bookAuthor;
  addedBookGridAuthorSpan.classList.add('book-author');

  const addedBookGridGenreSpan = document.createElement('span');
  addedBookGridGenreSpan.textContent = bookGenre;
  addedBookGridGenreSpan.classList.add('book-genre');

  const addedBookGridRemoveButton = document.createElement('button');
  addedBookGridRemoveButton.textContent = 'Remove';
  addedBookGridRemoveButton.type = 'button';
  addedBookGridRemoveButton.classList.add('remove-button');

  document.querySelector('.books').appendChild(addedBookGrid);
  addedBookGrid.appendChild(addedBookGridTitleSpan);
  addedBookGrid.appendChild(addedBookGridAuthorSpan);
  addedBookGrid.appendChild(addedBookGridGenreSpan);
  addedBookGrid.appendChild(addedBookGridRemoveButton);
})



function Book(title, author, genre, isRead) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.isRead = isRead;
}

function addBookToLibrary() {

}