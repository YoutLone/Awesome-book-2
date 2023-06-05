export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

    bookList = [];

    add() {
      if (document.getElementById('title').value && document.getElementById('author').value) {
        const temp = {
          title: document.getElementById('title').value,
          author: document.getElementById('author').value,
        };
        this.bookList = this.bookList.concat(temp);
        localStorage.setItem('bookList', JSON.stringify(this.bookList));
        this.bookList = JSON.parse(localStorage.getItem('bookList'));
        this.displayInfo();
      }
    }

    displayInfo() {
      if (JSON.parse(localStorage.getItem('bookList'))) {
        this.bookList = JSON.parse(localStorage.getItem('bookList'));
        document.getElementById('bookShelf').innerHTML = '';
        this.bookList.forEach((book, index) => {
          const childDiv = document.createElement('div');
          childDiv.classList.add('book-row');
          childDiv.innerHTML = `<p class="title-p">"${book.title}" By: ${book.author}</p>`;
          const removeButton = document.createElement('button');
          removeButton.classList.add('removeButton');
          removeButton.innerHTML = '<b>Remove</b>';
          childDiv.appendChild(removeButton);
          document.getElementById('bookShelf').appendChild(childDiv);
          removeButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.remove(index);
          });
        });
      }
    }

    remove(index) {
      this.bookList = this.bookList.slice(0, index).concat(this.bookList.slice(index + 1));
      localStorage.setItem('bookList', JSON.stringify(this.bookList));
      this.displayInfo();
    }
}
