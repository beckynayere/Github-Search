import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserRepoListComponent } from './user-repo-list/user-repo-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { DateCountPipe } from './date-count.pipe';
import { LogoHighlightDirective } from './logo-highlight.directive';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { GitProfileComponent } from './git-profile/git-profile.component';
import { GitUsersComponent } from './git-users/git-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    SearchUserComponent,
    UserRepoListComponent,
    UserDataComponent,
    DateCountPipe,
    LogoHighlightDirective,
    AboutComponent,
    GithubComponent,
    GitProfileComponent,
    GitUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
