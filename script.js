const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let bookTitle = document.querySelector("#title").value;
  let bookAuthor = document.querySelector("#author").value;
  let bookPage = document.querySelector("#pages").value;
  let bookRead = document.querySelector("#read").checked;
  let newBook = new Book(bookTitle, bookAuthor, bookPage, bookRead);
  myLibrary.push(newBook);
  render();
}

function removeBook(index){
  myLibrary.splice(index, 1);
  render();
}

function changeReadStatus(index){
  myLibrary[index].read = !myLibrary[index].read;
  render();
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

function render(){
  let library = document.getElementById("library");
  document.getElementById("library").innerHTML = "";
  for(let index = 0; index < myLibrary.length; index++){
    let bookElement = document.createElement('div');
    let book = myLibrary[index];
    bookElement.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <p>${book.pages}</p>
    <p>${book.read ? "read" : "Not read"}</p>
    <button id="rm-bk-btn" onclick="removeBook(${index})">Remove Book</button>
    <button id="rm-bk-btn" onclick="changeReadStatus(${index})">Change Status</button>
    `;
    library.appendChild(bookElement);
  }
}