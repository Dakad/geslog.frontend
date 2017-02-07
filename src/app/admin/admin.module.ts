import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { routing } from './admin-routing.module';
import { GeslogService } from '../services/geslog-api.service'

import { AdminComponent } from './admin.component';


import PageNotFound from '../page-not-found.component';
import FlashMsgComponent from '../flash-msg.component';
import { UserAddComponent } from './user/user-add/user-add.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    FlashMsgComponent,
    UserAddComponent,
    PageNotFound
  ],
  providers: [GeslogService]
})
export class AdminModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes for Admin: ', JSON.stringify(router.config, undefined, 2));
  }
}
