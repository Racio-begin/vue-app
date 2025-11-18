import Book from "./Book";

class Library {
	constructor() {
		this.books = [];
	};

	addBook(bookData) {
		const book = new Book(bookData);
		this.books.push(book);
		return book;
	};

	fetchBookData(bookData, delay = 1000) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const success = Math.random() > 0.25;

				if (success) {
					resolve(bookData);
				} else[
					reject(new Error("Книги не были загружены"))
				];
			}, delay);
		});
	};

	async addBookAsync(bookData) {
		console.log("⏳ Начинаем загрузку книги...");

		const dataBook = await this.fetchBookData(bookData);
		const book = this.addBook(dataBook);

		return book;
	}
}

export default Library;
