import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersClientService {
  private usersSearchUrl = 'https://api.github.com/search/users';
  constructor(private http: HttpClient) {
  }

  fetchUsersByTerm(term: string) {
    return this.http.get(this.usersSearchUrl, {
      params: {
        q: term
      }
    });

  }
}
