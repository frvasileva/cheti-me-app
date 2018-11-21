import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './ui-core/layout/layout.component';
import { HeaderComponent } from './ui-core/header/header.component';
import { FooterComponent } from './ui-core/footer/footer.component';
import { HomeComponent } from './ui-core/home/home.component';
import { AboutComponent } from './ui-core/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from './books/books.module';
import { NotFoundComponent } from './ui-core/not-found/not-found.component';
import { AuthorsComponent } from './authors/authors/authors.component';
import { ArticlesComponent } from './articles/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LayoutComponent,
    NotFoundComponent,
    AuthorsComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
