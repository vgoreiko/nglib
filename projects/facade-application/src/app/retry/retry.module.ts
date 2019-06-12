import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetryRoutingModule } from './retry-routing.module';
import { RetryViewComponent } from './retry-view/retry-view.component';

@NgModule({
  declarations: [RetryViewComponent],
  imports: [
    CommonModule,
    RetryRoutingModule
  ]
})
export class RetryModule { }
