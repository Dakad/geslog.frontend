import { Component, OnInit } from '@angular/core';

import { GeslogAdminService } from './geslog-admin.service';

import Appli from '../dto/appli';


@Component({
  template: `
    <h2 class='page-header clearfix'>Admin Dashboard</h2>
 

    <app-appli-list [list]=applis > </app-appli-list>

  `
})
export class AdminDashboardComponent implements OnInit {

  private applis: Appli[];

  constructor(private _geslog: GeslogAdminService) { }

  ngOnInit() {
    this._geslog.listApplis().subscribe(data => this.applis = data);
  }


}

