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
import { AuthorsComponent } from './authors/authors.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { BookService } from './books/books.service';
import { AuthorModule } from './authors/author.module';
import { AuthorService } from './authors/author.service';

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
    BooksModule,
    AuthorModule
  ],
  providers: [BookService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
