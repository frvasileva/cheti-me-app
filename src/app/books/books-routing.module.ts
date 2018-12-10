import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books.component";
import { BooksListComponent } from "./books-list/books-list.component";
import { BooksDetailComponent } from "./books-detail/books-detail.component";
import { NotFoundComponent } from "../ui-core/not-found/not-found.component";


const booksRoutes: Routes = [
  {
    path: "", component: BooksComponent,
    children: [
      { path: "", component: BooksListComponent },
      { path: "details/:id", component: BooksDetailComponent },
      // { path: "**", component: NotFoundComponent }
      ]
  }, ];

@NgModule({
  imports: [
    RouterModule.forChild(booksRoutes)
  ],
  exports: [RouterModule]
})
export class BooksRoutingModule {

}
