import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from './retry.decorator';
import {of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubClientService {
  url = 'https://api.github.com'
  constructor(private http: HttpClient) { }

  @retry({fallBack: function(e){
    // return of([{login: 'bla'}])
      return throwError(e)
  }})
  getUsers(){
    return this.http.get(`${this.url}/usersS?t=someBla`)
  }
}
