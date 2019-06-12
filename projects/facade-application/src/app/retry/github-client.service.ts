import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubClientService {
  url = 'https://api.github.com'
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.url}/users?t=someBla`)
  }
}
