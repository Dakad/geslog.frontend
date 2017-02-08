import { Component, OnInit } from '@angular/core';

import Profil from '../../dto/profil';
import Appli from '../../dto/appli';


@Component({
  selector: 'app-profil',
  template: `
    <div class="row">
    <div class="col-md-5">
        <app-profil-list [list]="profils"></app-profil-list>
    </div>
    <div class="col-md-7">
        <app-profil-add [selected]="selectedProfil"></app-profil-add>
    </div>
</div>
  `
})
export class ProfilComponent implements OnInit {
  private profils: Profil[];
  private selectedProfil: Profil;


  constructor() { }

  ngOnInit() {
    // Creer une function dans les GesLogService pour recuperer tous les applications

  }





}
