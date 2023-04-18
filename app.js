let myLibrary = [];

 document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const bookTitle = document.getElementById('book-title').value;
  const bookAuthor = document.getElementById('book-author').value;
  const bookGenre = document.getElementById('book-genre').value;
  const isRead = document.getElementById('book-status').checked;

  const addedBook = new Book(bookTitle, bookAuthor, bookGenre, isRead);

  myLibrary.push(addedBook);

  console.log(myLibrary);

  console.log(`Title : ${bookTitle}, Author : ${bookAuthor}, Genre : ${bookGenre}, isRead ${isRead}.`)

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

  const addedBookGridStatusLabel = document.createElement('label');
  const addedBookGridStatusInput = document.createElement('input');
  addedBookGridStatusLabel.textContent = 'Mark as read';
  addedBookGridStatusInput.type = 'checkbox';
  addedBookGridStatusLabel.htmlFor = 'book-status';
  addedBookGridStatusInput.classList.add('book-status');
  addedBookGridStatusInput.id = 'book-status';

  if (isRead) {
    addedBookGridStatusInput.checked = true;
  } else {
    addedBookGridStatusInput.checked = false
  }

  const addedBookGridRemoveButton = document.createElement('button');
  addedBookGridRemoveButton.classList.add('remove-button');
  addedBookGridRemoveButton.textContent = 'Remove';
  addedBookGridRemoveButton.type = 'button';

  document.querySelector('.books').appendChild(addedBookGrid);
  addedBookGrid.appendChild(addedBookGridTitleSpan);
  addedBookGrid.appendChild(addedBookGridAuthorSpan);
  addedBookGrid.appendChild(addedBookGridGenreSpan);
  addedBookGrid.appendChild(addedBookGridStatusLabel);
  addedBookGridStatusLabel.appendChild(addedBookGridStatusInput);
  addedBookGrid.appendChild(addedBookGridRemoveButton);

  const removeButtons = document.querySelectorAll('.remove-button');

  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.parentElement.remove();
    })
  })
})

function Book(title, author, genre, isRead) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.isRead = isRead;
}

function addBookToLibrary() {

}