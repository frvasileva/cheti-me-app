import { Author } from "../authors/author.model";

export class Book {
  public id: string;
  public title: string;
  public bookType: string;
  public description?: string;
  public coverPath?: string;
  public author?: Author;

  constructor(
    id: string,
    title: string,
    bookType: string,
    description: string,
    coverPath: string,
    author: Author
  ) {
    this.id = id;
    this.title = title;
    this.bookType = bookType;
    this.description = description;
    this.coverPath = coverPath;
    this.author = author;
  }

  bla(obj: { X: BookType }) {
    const aaaa = obj.X;
    console.log(aaaa);
  }
}
