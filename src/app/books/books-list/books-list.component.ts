import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Book } from "../book.model";
import { BookService } from "../books.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"]
})
export class BooksListComponent implements OnInit {
  books: Book[];
  subscription: Subscription;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  addToWantToReadList(bookId) {
    console.log(bookId);
    this.bookService.addToWantToReadList(+bookId);
  }

  addToAlreadyRead(bookId) {
    console.log("book {0} added to already read books", +bookId);
  }

  wantToShare(bookId) {
    console.log("User want to share book {0}", +bookId);
  }
}
