import { Component, OnInit } from '@angular/core';
import {RepoServiceService} from '../repo-service.service';
import {RepoModel} from '../repo-model';
import { from } from 'rxjs';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  myRepo :RepoModel [];

  constructor(public reposervice:RepoServiceService) { 

  
  }

  getRepo(searchTerm:string) {
  this.reposervice.getRepo(searchTerm).subscribe(data => {
    this.myRepo = data;
    console.log(this.myRepo);
  });

}

  ngOnInit()  {

    this.getRepo('beckynayere');
  }

  
}