import { Component, OnInit } from '@angular/core';

import Appli from '../../dto/appli';

import { GeslogAdminService } from '../geslog-admin.service';

@Component({
    moduleId: module.id,
    selector: 'app-appli',
    template: `
    <div class="row">
    <div class="col-md-5">
        <app-appli-list [list]="apps" (select)=onUpsert($event) ></app-appli-list>
    </div>
    <div class="col-md-6 col-md-offset-1">
        <app-appli-add [selected]=selectedApp (upsert)=onUpsertAppli($event) ></app-appli-add>
    </div>
</div>
  `
})
export class AppliComponent implements OnInit {
    private apps: Appli[];
    private selectedApp: Appli;


    constructor(private _geslog: GeslogAdminService) { }

    ngOnInit() {
        this._geslog.listApplis().subscribe(data => this.apps = data);
    }

    onUpsert(event: Appli) {
        this.selectedApp = (event) ? event : new Appli();
    }


    onUpsertAppli(appli: Appli) {
        console.log(appli);
        // Call the upsert method on GeslogAdminService to send appli
        // this._geslog.
    }


}