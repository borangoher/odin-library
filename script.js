function Book (title, author, pageCount, read) {
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.read = read
}

Book.prototype.readToString = function() {
    return (this.read ? "has been read" : "not yet read");
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pageCount} pages, ${this.readToString()}.`;
}

mainElement = document.getElementById("main");

function displayNewBook (Book) {
    let bookLine = document.createElement("div");
    bookLine.textContent = Book.info();
    bookLine.classList.add("book");
    mainElement.appendChild(bookLine);
}

function addBook () {
    let title = prompt("Title?");
    let author = prompt("Author?");
    let page = prompt("Page Count?");
    let readAnswer = prompt("Read? (y/n)");
    let read = () => {return ((readAnswer === "y") ? true : false)};
    let newBook = new Book(title, author, page, read());
    displayNewBook(newBook);
}

buttonElement = document.getElementById("add");
buttonElement.addEventListener("click", addBook);