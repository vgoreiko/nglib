import { BrowserModule } from '@angular/platform-browser';
import {NgModule, SystemJsNgModuleLoader} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { RetryModule } from './retry/retry.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule,
    RetryModule
  ],
  providers: [SystemJsNgModuleLoader],
  bootstrap: [AppComponent]
})
export class AppModule { }
