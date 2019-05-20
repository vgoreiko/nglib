import {NgModule} from '@angular/core';
import {BtnComponent} from './btn/btn.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';

@NgModule({
  declarations: [BtnComponent],
  imports: [
    OverlayModule,
    PortalModule,
  ],
  exports: [BtnComponent]
})
export class UiComponentsModule {
}
