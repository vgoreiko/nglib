import {OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, throwError} from 'rxjs';
import {catchError, debounceTime, filter, map, share, switchMap, tap} from 'rxjs/operators';
import {AbstractControl, FormControl} from '@angular/forms';
import {from} from 'rxjs/internal/observable/from';

export interface ControlSettings {
  minLetters: number
  debounceTime: number
}

const defaultControlSettings = {
  minLetters: 3,
  debounceTime: 1000
};


export class UsersAbstractContainerComponent implements OnInit {
  controlSettings: ControlSettings = defaultControlSettings
  results$: Observable<any[]>;
  term$: Observable<string>;
  // tslint:disable-next-line:variable-name
  _loading$ = new BehaviorSubject(false)
  loading$ = this._loading$.asObservable()
  noResults$: Observable<boolean>

  ngOnInit() {
    this.term$ = this.initTermStream()
    this.results$ = this.initItemsStream()
    this.noResults$ = this.initNoResultsStream()
  }

  private initTermStream() {
    return this.searchControl.valueChanges.pipe(
      filter(val => !(val.length < this.controlSettings.minLetters)),
      debounceTime(this.controlSettings.debounceTime),
      map(val => val)
    );
  }

  private initItemsStream() {
    return this.term$.pipe(
      tap(val => this._loading$.next(true)),
      switchMap(term => this.fetchItems(term)),
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
      this.results$,
      this.loading$
    ).pipe(
      map(([term, users, loading]) => {
        return term && !users.length && !loading
      })
    )
  }

  private initNoResultsStream() {
    return this.noResults$ = combineLatest(
      this.term$,
      this.results$,
      this.loading$
    ).pipe(
      map(([term, items, loading]) => {
        return term && !items.length && !loading
      })
    )
  }

  protected fetchItems(term: string): Observable<any[]> {
    return from([])
  }

  protected get searchControl(): AbstractControl {
    return new FormControl()
  }
}
