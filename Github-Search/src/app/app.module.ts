import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {UserDataComponent } from './user-data/user-data.component';
import {SearchUserComponent } from './search-user/search-user.component';
import {RepoListComponent} from './repo-list/repo-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DatepipePipe } from './date-count.pipe';
import { LogoHighlightDirective } from './logo-highlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserDataComponent,
    SearchUserComponent,
    RepoListComponent,
    NotFoundComponent,
    DatepipePipe,
    LogoHighlightDirective
    
    

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
