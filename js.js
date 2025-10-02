document.addEventListener("DOMContentLoaded", () => {
	const table = document.querySelector("#library");
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

	function showLibrary() {
		for (let book of library) {
			const row = document.createElement("tr");
			row.classList.add(book.id);
			const title = document.createElement("td");
			title.textContent = book.title
			const author = document.createElement("td");
			author.textContent = book.author
			const pages = document.createElement("td");
			pages.textContent = book.pages;
			const read = document.createElement("td");
			read.textContent = "false";
			row.appendChild(title);
			row.appendChild(author);
			row.appendChild(pages);
			row.appendChild(read);
			table.appendChild(row);
		}
	}
	storeBook("A", "B", "100", true);
	showLibrary();
})

const library = [];

