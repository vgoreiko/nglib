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
export class UserSearchComponent implements OnInit {
  @Input() results: User[]
  @Input() searchControl: FormControl
  constructor() {
  }

  ngOnInit() {
  }

}
