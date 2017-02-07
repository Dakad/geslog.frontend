import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { routing } from './app-routing.module';
import { AuthGuard } from './services/auth-guard.service';
import AuthService from './services/auth.service';


import { AppComponent } from './app.component';

import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import SecretariatComponent from './secretariat/secretariat.component';
import SecretariatService from './secretariat/secretariat.service';



import PageNotFound from './page-not-found.component';
import FlashMsgComponent from './flash-msg.component';
import { FileStreamComponent } from './test/file-stream/file-stream.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
