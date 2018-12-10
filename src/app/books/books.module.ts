import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BooksListComponent } from "./books-list/books-list.component";
import { BooksDetailComponent } from "./books-detail/books-detail.component";
import { BooksComponent } from "./books.component";
import { BooksRoutingModule } from "./books-routing.module";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    BooksListComponent,
    BooksDetailComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BooksRoutingModule
  ]
})
export class BooksModule {

}
