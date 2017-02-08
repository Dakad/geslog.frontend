import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AdminRoutingModule } from './admin-routing.module';
import { GeslogAdminService } from './geslog-admin.service';

import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilAddComponent } from './profil/profil-add.component';
import { ProfilListComponent } from './profil/profil-list.component';

import { AppliComponent } from './appli/appli.component';
import { AppliAddComponent } from './appli/appli-add.component';
import { AppliListComponent } from './appli/appli-list.component';

import { UserAddComponent } from './user/add/user-add.component';



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
    UserAddComponent
  ],
  providers: [GeslogAdminService],
})
export class AdminModule { }
