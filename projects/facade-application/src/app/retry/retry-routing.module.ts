import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetryViewComponent } from './retry-view/retry-view.component';

const routes: Routes = [
  {
    path: 'retry',
    component: RetryViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetryRoutingModule { }
