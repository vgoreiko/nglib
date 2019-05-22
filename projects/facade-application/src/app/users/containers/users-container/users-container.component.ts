import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {UsersClientService} from '../../services';
import {User} from '../../models';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersContainerComponent implements OnInit {
  term = '';
  users: User[] = [];

  users$: Observable<User[]>;
  term$: Observable<string>;

  constructor(private usersClient: UsersClientService, ) {
  }

  ngOnInit() {
  }

  fetchUsersByTerm(term: string) {
    return this.usersClient.fetchUsersByTerm(term).subscribe(response => this.users = response['items']);
  }
}
