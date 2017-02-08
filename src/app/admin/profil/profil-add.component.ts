import { Component, Input, Output, OnInit } from '@angular/core';

import Profil from '../../dto/profil';
import Appli from '../../dto/appli';


@Component({
  selector: 'app-profil-add',
  template: `<ul> <li>TEst de profil select</li> <ul>`
})
export class ProfilAddComponent implements OnInit {
  @Input('selected') private profil: Profil;
  // @Output('update') private updateRequest: Profil;


  constructor() {

  }

  ngOnInit() {
    // Creer une function dans les GesLogService pour recuperer tous les applications

  }





}
