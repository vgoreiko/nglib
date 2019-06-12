import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from './retry.decorator';
import { throwError} from 'rxjs';
import { httpRetry } from './retry.operator';

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

  getPersons(){
    return this.http.get(`${this.url}/persons?t=someBla`).pipe(
      httpRetry()
    )
  }
}
