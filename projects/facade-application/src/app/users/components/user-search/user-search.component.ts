import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
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
  @Input() loading = false
  @Input() noResults = false
  constructor() {
  }

  ngOnInit() {
  }

}
