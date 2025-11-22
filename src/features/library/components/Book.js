class Book {
	constructor(bookData) {
		const {
			title = "Название неизвестно",
			author = "Автор неизвестен",
			year = "Год неизвестен",
			isRead = false,
		} = bookData;

		this.title = title;
		this.author = author;
		this.year = year;
		this.isRead = isRead;
	}

	getInfo() {
		const info = `Книга "${this.title}", автор ${this.author} (${this.year})`;
		console.log("info :", info);

		return info;
	}
}

export default Book;
