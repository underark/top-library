document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");
	const library = [];
	const tbody = document.querySelector("tbody");

	form.addEventListener("submit", (e) => {
		console.log("attached");
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
		while(tbody.firstChild) {
			tbody.removeChild(tbody.lastChild);
		}

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
			tbody.appendChild(row);
		}
	}
});
