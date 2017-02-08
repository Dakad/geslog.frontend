import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { routing } from './app-routing.module';
// import { AuthGuard } from './services/auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import AuthService from './services/auth.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import PageNotFound from './page-not-found.component';
import FlashMsgComponent from './flash-msg.component';
import { FileStreamComponent } from './test/file-stream/file-stream.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FlashMsgComponent,
    PageNotFound,
    FileStreamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthService, SelectivePreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
