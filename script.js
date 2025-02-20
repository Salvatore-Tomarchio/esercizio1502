// url: https://striveschool-api.herokuapp.com/books
/* function playBook(){
    fetch("https://striveschool-api.herokuapp.com/books"
        method: )
} */

const bookEndpoint = `https://striveschool-api.herokuapp.com/books`;

function playBook() {
    fetch(bookEndpoint)
    .then(response => response.json())
    .then(json => {
        renderBook(json)
    })
    .catch(err => console.log(err));
}

const bookContainer = document.getElementById('bookContainer');

function renderBook(book) {
    bookContainer.innerHTML = '';
    book.forEach(book => {
        const bookBox = document.createElement('div');
        bookBox.classList.add('book');
        bookBox.innerHTML = ``;

        bookContainer.appendChild(bookBox);
    })
}