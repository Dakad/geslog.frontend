import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import Profil from '../../../dto/profil';
import Appli from '../../../dto/appli';


@Component({
    selector: 'app-profil-add',
    templateUrl: 'profil-add.component.html',
    styles: ['']
})
export class ProfilAddComponent implements OnInit {
    @Input('selected') private profil: Profil;
    @Output('upsert') private updateRequest: EventEmitter<Profil>;


    constructor() {
        this.updateRequest = new EventEmitter<Profil>();
    }

    ngOnInit() {
        // Creer une function dans les GesLogService pour recuperer tous les applications

    }

    upsert() {
        this.updateRequest.emit(this.profil);
    }




}
