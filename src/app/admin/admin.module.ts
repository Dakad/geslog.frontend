import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AdminRoutingModule } from './admin-routing.module';
import { GeslogAdminService } from './geslog-admin.service';
import { GeslogService } from '../services/geslog-api.service';

import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilAddComponent } from './profil/profil-add.component';
import { ProfilListComponent } from './profil/profil-list.component';

import { AppliComponent } from './appli/appli.component';
import { AppliAddComponent } from './appli/appli-add.component';
import { AppliListComponent } from './appli/appli-list.component';

import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/add/user-add.component';
import { UserListComponent } from './user/list/user-list.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule,

  ],
  exports: [],
  declarations: [
    NavbarComponent,
    AdminComponent, AdminDashboardComponent,
    ProfilComponent, ProfilAddComponent, ProfilListComponent,
    AppliComponent, AppliAddComponent, AppliListComponent,
    UserAddComponent,UserComponent,UserListComponent
  ],
  providers: [GeslogAdminService,GeslogService],
})
export class AdminModule { }
