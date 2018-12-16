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

  constructor(private service: BookService) { }

  ngOnInit() {
    this.books = this.service.getBooks();
  }

}
