import { Component, OnInit } from '@angular/core';

import Profil from '../../../dto/profil';
import App from '../../../dto/app';


@Component({
  selector: 'app-profil-add',
  templateUrl: './profil-add.component.html',
  styleUrls: ['./profil-add.component.css']
})
export class ProfilAddComponent extends OnInit {

  private profil: Profil;
  private listApps: App[];


  constructor() {
    super();

  }

  ngOnInit() {
    // Creer une function dans les GesLogService pour recuperer tous les applications

  }





}
