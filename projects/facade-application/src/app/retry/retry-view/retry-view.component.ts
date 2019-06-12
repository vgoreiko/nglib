import { Component, OnInit } from '@angular/core';
import {GithubClientService} from '../github-client.service';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-retry-view',
  templateUrl: './retry-view.component.html',
  styleUrls: ['./retry-view.component.scss']
})
export class RetryViewComponent implements OnInit {
  users$: Observable<any>
  constructor(private githubClient: GithubClientService) { }

  ngOnInit() {
    this.users$ = this.githubClient.getUsers().pipe(
      catchError((e) => {
        // here goes custom handler if needed
        return e
      })
    )
  }
}
