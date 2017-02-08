import { Component, OnInit } from '@angular/core';

import Profil from '../../dto/profil';
import Appli from '../../dto/appli';

import { GeslogAdminService } from '../geslog-admin.service';


@Component({
  selector: 'app-profil',
  template: `
    <div class="row">
      <div class="col-md-4">
          <app-profil-list [list]="profils" (select)=onSelect($event) >
          </app-profil-list>
      </div>
      <div class="col-md-8">
          <app-profil-add [selected]="selectedProfil" (upsert)=onUpsert($event)></app-profil-add>
      </div>
  </div>
  `
})
export class ProfilComponent implements OnInit {
  private profils: Profil[];
  private selectedProfil: Profil;


  constructor(private _geslog:GeslogAdminService) { }

  ngOnInit() {
    // Creer une function dans les GesLogService pour recuperer tous les applications
    this._geslog.listProfils().subscribe(data => this.profils = data);
  }


  onSelect(profil:Profil){
    console
    if(profil){
      // Go fecth all applications related to this selected profil
      // this._geslog.getProfilById(profil.id)
      //              .subscribe(data => this.selectedProfil = data);
    }else{
      this.selectedProfil = new Profil();
    }
  }


  onUpsert(profil:Profil){
    console.log(profil);
    // this._geslog.upsert(profil);
  }




}
