import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Observable } from 'rxjs/Observable';

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


    constructor(
        private _geslog: GeslogAdminService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        this._geslog.listApplis().subscribe(data => this.apps = data);
        console.log('daffds');
        this.route.params
                    .switchMap((params: Params) => {
                        console.log(params);
                        const paramId = +params['id'];
                        return (params['id']) ? this._geslog.getAppliById(+params['id']) : Observable.of(null);
                    })
                    .subscribe(app => this.selectedApp = app);
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