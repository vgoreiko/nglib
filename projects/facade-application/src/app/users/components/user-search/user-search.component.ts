import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, AfterViewInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {map, takeUntil} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../models';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchComponent implements OnInit, OnDestroy {
  @Input() term = '';
  @Input() results: User[]
  @Output() termChange = new EventEmitter<string>();
  searchFormGroup: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.initFormGroup()
  }

  ngOnInit() {
    this.searchControl.patchValue(this.term)
    this.getTextChangesSubscription()
  }

  ngOnDestroy(): void {
  }

  get searchControl() {
    return this.searchFormGroup.get('searchControl')
  }

  private initFormGroup() {
    this.searchFormGroup = this.formBuilder.group({
      searchControl: []
    })
  }

  private getTextChangesSubscription() {
    return this.searchControl.valueChanges.pipe(
      map(val => val)
    ).subscribe((value) => {
      this.termChange.emit(value)
    })
  }
}
