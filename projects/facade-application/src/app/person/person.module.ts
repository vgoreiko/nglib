import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PersonComponent} from './person.component';
import {UiComponentsModule} from 'ui-components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PersonComponent
      }
    ]),
    UiComponentsModule,
  ],
  declarations: [PersonComponent],
  entryComponents: [
    PersonComponent,
  ]
})
export class PersonModule {
}
