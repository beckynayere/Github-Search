import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  _URL = 'https://api.github.com/users/';
  token = '?access_token=2c735b73af0245adfc3ff7ff4a9952cbb21eed5f';

  constructor(public http: HttpClient) {

  }

getRepo(searchTerm: string): Observable < any > {
  return this.http.get(this._URL + searchTerm + '/repos?' + this.token);


}
}
