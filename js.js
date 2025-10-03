document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");
	const tbody = document.querySelector("tbody");
	let library = [];

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const data = new FormData(form);
		const title = data.get("title");
		const author = data.get("author");
		const pages = data.get("pages");
		const read = data.get("read");
		storeBook(title, author, pages, read);
		showLibrary();
	});

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
		clearLibrary();
		for (let book of library) {
			const row = createRow(book.title, book.author, book.pages, book.read);
			row.classList.add(book.id);
			const deleteButtonCell = document.createElement("td");
			const deleteButton = document.createElement("button");
			deleteButtonCell.appendChild(deleteButton);
			deleteButton.addEventListener("click", () => {
				tbody.removeChild(row);
				library = library.filter(libraryBook => libraryBook.id !== book.id);
			});
			row.appendChild(deleteButtonCell);
			tbody.appendChild(row);
		}
	}

	function clearLibrary() {
		while(tbody.firstChild) {
			tbody.removeChild(tbody.lastChild);
		}
	}

	function createTableData(content) {
		const element = document.createElement("td");
		element.textContent = content;
		return element;
	}

	function createRow(title, author, pages, read) {
		const row = document.createElement("tr");
		const bookTitle = createTableData(title);
		const bookAuthor = createTableData(author);
		const bookPages = createTableData(pages);
		const bookRead = createTableData(read);
		row.appendChild(bookTitle);
		row.appendChild(bookAuthor);
		row.appendChild(bookPages);
		row.appendChild(bookRead);
		return row
	}
});
