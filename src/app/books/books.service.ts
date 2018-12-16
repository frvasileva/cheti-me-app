import { Injectable } from "@angular/core";

import { Author } from "../authors/author.model";
import { Book } from "./book.model";

@Injectable()
export class BookService {

  private books: Book[] = [
    new Book(
      "1",
      "Winnie the pooh",
      "ebook",
      "The best book ever",
      "https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png",
      new Author("1", "Bla bla bla ", "Nice bio")
    ),
    new Book(
      "2",
      "Dutch people",
      "ebook",
      "The best book ever",
      "https://99designs-blog.imgix.net/wp-content/uploads/2017/07/latest-1-e1500061170993.jpg?auto=format&q=60&fit=max&w=930",
      new Author("2", "Alan Miln", "Nice bio")
    ),
    new Book(
      "3",
      "The perfect dutch",
      "paper",
      "The best book ever",
      "https://s3-eu-west-1.amazonaws.com/books.readingagency/images/978/00/0737/9780007371464.jpg",
      new Author("3", "Kathian Brands", "Nice bio")
    )
  ];

  getBooks() {
    return this.books.slice();
  }

  getBook(id: number) {
    return this.books.find(x => x.id === id.toString());
  }
}
