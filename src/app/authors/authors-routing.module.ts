import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../ui-core/not-found/not-found.component";
import { AuthorsComponent } from "./authors/authors.component";
import { AuthorDetailsComponent } from "./author-details/author-details.component";


const authorsRoutes: Routes = [
  {
    path: 'authors', component: AuthorsComponent,
    children: [
      { path: '', component: AuthorDetailsComponent },
      { path: 'details/:id', component: AuthorDetailsComponent },
      { path: '**', component: NotFoundComponent }
    ]
  },]

@NgModule({
  imports: [
    RouterModule.forChild(authorsRoutes)
  ],
  exports: [RouterModule]
})
export class AuthorsRoutingModule {

}