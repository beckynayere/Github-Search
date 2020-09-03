import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// tslint:disable-next-line:import-spacing
import {NotFoundComponent} from './not-found/not-found.component';
import{RepoListComponent} from './repo-list/repo-list.component';
import {UserDataComponent} from './user-data/user-data.component';


const routes: Routes = [
  {path: '', redirectTo:'/user-list' ,pathMatch: 'full'},
  {path: 'user-list', component :UserDataComponent},
  {path:'repo-list' , component: RepoListComponent},
  {path:'**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}


