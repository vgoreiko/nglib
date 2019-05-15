import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PersonComponent} from './person.component';
import {UiComponentsModule} from '../../../../../libraries/ui-components/src/lib/ui-components.module';

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
  declarations: [PersonComponent]
})
export class PersonModule {
}
