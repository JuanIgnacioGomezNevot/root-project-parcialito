export class Libro {
	constructor(
		id,
		title,
		author,
		isbn,
		publishedDate = new Date(new Date().getDate() + 7 * 24 * 60 * 60 * 1000),
		availableCopies,
	) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		this.publishedDate = publishedDate;
		this.availableCopies = availableCopies; 
	}
}
