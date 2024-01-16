const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render(){
    
}


function addBookToLibrary() {
  let bookTitle = document.querySelector("#title").value;
  let bookAuthor = document.querySelector("#author").value;
  let bookPage = document.querySelector("#pages").value;
  let bookRead = document.querySelector("#read").checked;
  let newBook = new Book(bookTitle, bookAuthor, bookPage, bookRead);
  myLibrary.push(newBook);
//   function render();
}


const addBkBtn = document.querySelector("#add-bk-btn");
const bookForm = document.querySelector("#book-form");

addBkBtn.addEventListener("click", ()=>{
    bookForm.style.display = "block";
})

bookForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    addBookToLibrary();
})
