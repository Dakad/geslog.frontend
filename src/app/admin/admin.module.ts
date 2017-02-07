import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { routing } from './app-routing.module';
import { AuthGuard } from './services/auth-guard.service';


import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';


import PageNotFound from './page-not-found.component';
import FlashMsgComponent from './flash-msg.component';
import { UserAddComponent } from './user/user-add/user-add.component';


@NgModule({
  declarations: [ 
    AdminComponentnent,
    FlashMsgComponent,
    PageNotFound,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AdminModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
 