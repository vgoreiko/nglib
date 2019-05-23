import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsersClientService} from '../../services';
import {FormBuilder} from '@angular/forms';
import {UsersAbstractContainerComponent} from './users-abstract.component';


@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersContainerComponent extends UsersAbstractContainerComponent implements OnInit {
  constructor(public usersClient: UsersClientService, public formBuilder: FormBuilder) {
    super()
  }

  ngOnInit() {
    super.ngOnInit()
  }

  fetchItems(term: string) {
    return this.usersClient.fetchUsersByTerm(term)
  }
}
