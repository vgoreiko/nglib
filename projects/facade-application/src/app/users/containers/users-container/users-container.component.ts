import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {UsersClientService} from '../../services';
import {User} from '../../models';
import {Observable} from 'rxjs';
import {debounce, debounceTime, filter, map, switchMap, tap} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersContainerComponent implements OnInit {
  users: User[] = [];
  searchFormGroup: FormGroup;

  users$: Observable<User[]>;
  term$: Observable<string>;

  constructor(private usersClient: UsersClientService, private formBuilder: FormBuilder) {
    this.initFormGroup();
  }

  ngOnInit() {
    this.term$ = this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      filter(val => val.length),
      map(val => val),
      );
    this.users$ = this.term$.pipe(switchMap(term => this.usersClient.fetchUsersByTerm(term)), map(result => result['items']));
  }

  get searchControl() {
    return this.searchFormGroup.get('searchControl');
  }

  private initFormGroup() {
    this.searchFormGroup = this.formBuilder.group({
      searchControl: []
    });
  }
}
