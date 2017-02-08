import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import Appli from '../../dto/appli';

@Component({
    moduleId: module.id,
    selector: 'app-appli-add',
    template: `
    <form class="form-horizontal" *ngIf="currentAppli">
    <h2>{{currentAppli.name || "Nouveau logiciel"}}</h2>
        <fieldset>
            <div class="form-group">
                <label for="inputAppName" class="col-lg-2 control-label">Nom</label>
                <div class="col-lg-8">
                    <input type="text" autofocus required name="appName"  class="form-control" id="inputAppName" placeholder="Nom" [(ngModel)]=currentAppli.name>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAppFormat" class="col-lg-2 control-label">Format : </label>
                <div class="col-lg-10">
                    <input type="text" autofocus name="appFormat" class="form-control" id="inputAppFormat" placeholder="Format pour le script"  [(ngModel)]=currentAppli.format>
                </div>
            </div>
            <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-default" (click)="currentAppli=null">Annuler</button>
                    <button type="submit" class="btn btn-primary" (click)=upsert()>{{currentAppli.name ? "Modifier" : "Créer"}}</button>
                </div>
                </div>
        </fieldset>
    </form>
    `
})
export class AppliAddComponent implements OnInit {
    @Input('selected') private currentAppli: Appli;
    @Output('upsert') private upsertRequest: EventEmitter<Appli>;

    constructor() {
        this.upsertRequest = new EventEmitter<Appli>();
    }

    ngOnInit() { }


    upsert() {
        this.upsertRequest.emit(this.currentAppli);
    }
}