import { Component, OnInit } from '@angular/core';

import { GeslogAdminService } from './geslog-admin.service';

import Appli from '../dto/appli';
import Profil from '../dto/profil';
import { User } from '../dto/user';


@Component({
  template: `
    <h2 class='page-header'>Admin Dashboard</h2>
    <div class="row">
      <div class="col-md-6">
        <app-appli-list [list]=applis [mode]=componentMode > </app-appli-list>
      </div> 

      <div class="col-md-6">
        <app-profil-list [list]=profils [mode]=componentMode> </app-profil-list>
      </div>
    </div>
    
    <div class="row">
        <app-user-list [list]=users [mode]=componentMode> </app-user-list>
    </div>


  `
})
export class AdminDashboardComponent implements OnInit {
  private applis: Appli[];
  private profils:Profil[];
  private users:User[];
  private componentMode:string = 'link';

  constructor(private _geslog: GeslogAdminService) { }

  ngOnInit() {
    this._geslog.listApplis().subscribe(data => this.applis = data);
    this._geslog.listProfils().subscribe(data => this.profils = data);
    this._geslog.listUsers().subscribe(data => this.users = data);
  }



}

