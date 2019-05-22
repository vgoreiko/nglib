import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersContainerComponent} from './containers';
import {UsersClientService} from './services';
import {UserSearchComponent} from './components';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [UsersContainerComponent, UserSearchComponent],
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule, ],
  providers: [UsersClientService]
})
export class UsersModule {
}
