import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsersClientService} from '../../services';
import {User} from '../../models';
import {BehaviorSubject, combineLatest, Observable, throwError} from 'rxjs';
import {catchError, debounceTime, filter, map, share, switchMap, tap} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';

const minLetters = 3

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersContainerComponent implements OnInit {
  searchFormGroup: FormGroup;
  users$: Observable<User[]>;
  term$: Observable<string>;
  // tslint:disable-next-line:variable-name
  _loading$ = new BehaviorSubject(false)
  loading$ = this._loading$.asObservable()
  noResults$: Observable<boolean>
  constructor(private usersClient: UsersClientService, private formBuilder: FormBuilder) {
    this.initFormGroup();
  }

  ngOnInit() {
    this.term$ = this.searchControl.valueChanges.pipe(
      filter(val => !(val.length < minLetters)),
      debounceTime(1000),
      map(val => val)
    );
    this.users$ = this.term$.pipe(
      tap(val => this._loading$.next(true)),
      switchMap(term => this.usersClient.fetchUsersByTerm(term)),
      catchError(e => {
        this._loading$.next(false)
        return throwError(e)
      }),
      map(result => {
        this._loading$.next(false)
        return result
      }),
      share(),
    );
    this.noResults$ = combineLatest(
      this.term$,
      this.users$,
      this.loading$
    ).pipe(
      map(([term, users, loading]) => {
        return term && !users.length && !loading
      })
    )
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
