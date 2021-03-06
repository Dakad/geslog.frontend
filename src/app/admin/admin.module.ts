import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AdminRoutingModule } from './admin-routing.module';
import { GeslogAdminService } from './geslog-admin.service';
import { GeslogService } from '../services/geslog-api.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MultiSelectComponent } from './shared/multi-select/multi-select.component';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';

import { ProfilComponent } from './profil/profil.component';
import { ProfilAddComponent } from './profil/add/profil-add.component';
import { ProfilListComponent } from './profil/list/profil-list.component';

import { AppliComponent } from './appli/appli.component';
import { AppliAddComponent } from './appli/add/appli-add.component';
import { AppliListComponent } from './appli/list/appli-list.component';

import { FileStreamComponent } from '../test/file-stream/file-stream.component';

import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/add/user-add.component';
import { UserListComponent } from './user/list/user-list.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule

  ],
  exports: [],
  declarations: [
    NavbarComponent, MultiSelectComponent,
    AdminComponent, AdminDashboardComponent,
    ProfilComponent, ProfilAddComponent, ProfilListComponent,
    AppliComponent, AppliAddComponent, AppliListComponent,
    UserAddComponent, UserComponent, UserListComponent ,
    FileStreamComponent
  ],
  providers: [GeslogAdminService, GeslogService],
})
export class AdminModule { }
