import { Injectable } from "@angular/core";
import { Author } from "../author.model";

@Injectable()
export class AuthorService {

  private authors: Author[] = [
    new Author("1", 'Bla bla bla ', "Nice bio"),
    new Author("2", 'Alan Miln', "Nice bio"),
    new Author("3", 'Kathian Brands', "Nice bio")
  ]

  getAuthors() {
    return this.authors.slice();
  }

  getAuthor(id: string) {
    return this.authors.find(x => x.id === id.toString());
  }
}
