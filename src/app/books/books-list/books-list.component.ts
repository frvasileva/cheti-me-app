import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Book } from '../book.model';
import { Author } from 'src/app/authors/author.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  private books: Book[] = [
    new Book(
      "1",
      'Winnie the pooh',
      'The best book ever',
      'http://d1vzko4h6qahek.cloudfront.net/images/2/books/large/BFOVJ.jpg',
      new Author('Bla bla bla ', "Nice bio")
    ),
    new Book(
      "2",
      'Dutch people',
      'The best book ever',
      'http://stuffdutchpeoplelikebook.com/wp-content/uploads/2014/11/Book_cover_flat.png',
      new Author('Alan Miln', "Nice bio")
    ),
    new Book(
      "3",
      'Pod igoto!',
      'The best book ever',
      'https://images-na.ssl-images-amazon.com/images/I/71rsR5bTDlL.jpg',
      new Author('Ivan Vazov', "Nice bio")
    )
  ]

  constructor() { }

  ngOnInit() {
  }

}
