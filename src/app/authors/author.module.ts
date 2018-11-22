import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorsRoutingModule } from "./authors-routing.module";

@NgModule({
  declarations: [
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthorsRoutingModule],
  exports: []
})
export class AuthorModule {

}
