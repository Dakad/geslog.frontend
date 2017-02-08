import { Component, EventEmitter ,Input, Output, OnInit } from '@angular/core';

import Profil from '../../dto/profil';
import Appli from '../../dto/appli';


@Component({
  selector: 'app-profil-add',
  template: `
  <form class="form-horizontal" *ngIf="profil">
    <h2>{{profil.name || "Nouveau Profil"}}</h2>
        <fieldset>
            <div class="form-group">
                <label for="inputProfilName" class="col-lg-2 control-label">Intitulé : </label>
                <div class="col-lg-8">
                    <input type="text" autofocus required name="profilName"  class="form-control" id="inputProfilName" placeholder="Un titre pour ce profil" 
                        [(ngModel)]=profil.name>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAppFormat" class="col-lg-2 control-label">Logicels : </label>
                <div class="col-lg-10">
                 </div>
            </div>
            <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-default" (click)="profil=null">Annuler</button>
                    <button type="submit" class="btn btn-primary" (click)=upsert()>{{profil.name ? "Modifier" : "Créer"}}</button>
                </div>
                </div>
        </fieldset>
    </form>
    `
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

  upsert(){
    this.updateRequest.emit(this.profil);
  }




}
