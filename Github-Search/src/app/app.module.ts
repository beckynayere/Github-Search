import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { DatepipePipe } from './date-count.pipe';
import { LogoHighlightDirective } from './logo-highlight.directive';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RepoListComponent} from './repo-list/repo-list.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    SearchUserComponent,
    DatepipePipe,
    LogoHighlightDirective,
    RepoListComponent,
    HttpClientModule

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
