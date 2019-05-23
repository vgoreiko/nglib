import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UsersClientService} from '../../services';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsersAbstractContainerComponent} from './users-abstract.component';


@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersContainerComponent extends UsersAbstractContainerComponent implements OnInit {
  searchFormGroup: FormGroup
  constructor(public usersClient: UsersClientService, public formBuilder: FormBuilder) {
    super()
  }

  ngOnInit() {
    this.initFormGroup()
    super.ngOnInit()
  }

  fetchItems(term: string) {
    return this.usersClient.fetchUsersByTerm(term)
  }

  private initFormGroup() {
    this.searchFormGroup = this.formBuilder.group({
      searchControl: []
    })
  }

  protected get searchControl() {
    return this.searchFormGroup.get('searchControl')
  }
}
