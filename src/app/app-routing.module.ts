import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./ui-core/home/home.component";
import { AboutComponent } from "./ui-core/about/about.component";
import { NotFoundComponent } from "./ui-core/not-found/not-found.component";
import { ArticlesComponent } from "./articles/articles/articles.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  // {
  //     path: 'books',
  //     loadChildren: './books/books.module#BooksModule'
  // },
  { path: "about-us", component: AboutComponent },
  { path: "articles", component: ArticlesComponent },
  { path: "404", component: NotFoundComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
