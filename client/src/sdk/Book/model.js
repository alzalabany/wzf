export default class Book {
  constructor({
    id,
    title,
    author,
    description,
    isbn,
    publishYear,
    pagesNumber,
    image,
    category
  }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.isbn = isbn;
    this.publishYear = publishYear;
    this.pagesNumber = pagesNumber;
    this.image = image;
    this.category = category;
  }
}
