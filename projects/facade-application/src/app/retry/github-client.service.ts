import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from './retry.decorator';

@Injectable({
  providedIn: 'root'
})
export class GithubClientService {
  url = 'https://api.github.com'
  constructor(private http: HttpClient) { }

  @retry()
  getUsers(){
    return this.http.get(`${this.url}/usersS?t=someBla`)
  }
}
