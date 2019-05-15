import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { PersonComponent } from './person.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PersonComponent
      }
    ])
  ],
  declarations: [PersonComponent]
})
export class PersonModule {
}
