const library = [];

function Book(title, author, pages, read) {
	this.id = crypto.randomUUID();
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function storeBook(title, author, pages, read) {
	let newBook = new Book(title, author, pages, read);

	library.push(newBook);
}

