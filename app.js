let myLibrary = [];

const form = document.querySelector('form');
const newBookButton = document.getElementById('new-book-button');
const submitButton = document.getElementById('submit-book-button');
let formScale = false;

function Book(title, author, genre, isRead) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.isRead = isRead;
}

form.addEventListener('submit', (event) => {

  const bookTitle = document.getElementById('book-title').value;
  const bookAuthor = document.getElementById('book-author').value;
  const bookGenre = document.getElementById('book-genre').value;
  const isRead = document.getElementById('book-status').checked;

  event.preventDefault();

  const addedBook = new Book(bookTitle, bookAuthor, bookGenre, isRead);

  myLibrary.push(addedBook);

  const addedBookGrid = document.createElement('div');

  addedBookGrid.classList.add('book');
  addedBookGrid.classList.add('flex');
  addedBookGrid.classList.add('column');

  const addedBookGridTitleSpan = document.createElement('span');
  addedBookGridTitleSpan.textContent = `Title : ${bookTitle}`;
  addedBookGridTitleSpan.classList.add('book-title');

  const addedBookGridAuthorSpan = document.createElement('span');
  addedBookGridAuthorSpan.textContent = `Author : ${bookAuthor}`;
  addedBookGridAuthorSpan.classList.add('book-author');

  const addedBookGridGenreSpan = document.createElement('span');
  addedBookGridGenreSpan.textContent = `Genre : ${bookGenre}`;
  addedBookGridGenreSpan.classList.add('book-genre');

  const addedBookGridStatusButton = document.createElement('button');
  addedBookGridStatusButton.type = 'button';
  addedBookGridStatusButton.classList.add('book-status-button');
  addedBookGridStatusButton.id = 'book-status-button';
  
  if (isRead) {
    addedBookGridStatusButton.textContent = 'Read';
    addedBookGridStatusButton.style.backgroundColor = 'green';
  } else if (!isRead) {
    addedBookGridStatusButton.textContent = 'Not read';
    addedBookGridStatusButton.style.backgroundColor = 'red';
  }

  const addedBookGridRemoveButton = document.createElement('button');
  addedBookGridRemoveButton.classList.add('remove-button');
  addedBookGridRemoveButton.textContent = 'Remove';
  addedBookGridRemoveButton.type = 'button';

  document.querySelector('.books').appendChild(addedBookGrid);
  addedBookGrid.appendChild(addedBookGridTitleSpan);
  addedBookGrid.appendChild(addedBookGridAuthorSpan);
  addedBookGrid.appendChild(addedBookGridGenreSpan);
  addedBookGrid.appendChild(addedBookGridStatusButton);
  addedBookGrid.appendChild(addedBookGridRemoveButton);

  const removeButtons = document.querySelectorAll('.remove-button');

  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.parentElement.remove();
    })
  })

  const statusButtons = document.querySelectorAll('.book-status-button');

  statusButtons.forEach(button => {
    if (!button.hasAttribute('hasClickEventListener')) {
      button.addEventListener('click', () => {
        button.setAttribute('hasClickEventListener', 'true');
        console.log('click status');
        if (button.textContent == 'Read' && button.style.backgroundColor == 'green') {
          console.log('read');
          button.textContent = 'Not read';
          button.style.backgroundColor = 'red';
        } else if (button.textContent == 'Not read' && button.style.backgroundColor == 'red') {
          console.log('not read');
          button.textContent = 'Read';
          button.style.backgroundColor = 'green';
        }
      })
    }
  })
})

newBookButton.addEventListener('click', () => {
  if (!formScale) {
    formScale = true;
    form.style.scale = '1';
  } else if (formScale) {
    formScale = false;
    form.style.scale = '0';
  }
})

submitButton.addEventListener('click', () => {
  formScale = false;
  form.style.scale = '0';
})