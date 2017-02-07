import { Component, OnInit } from '@angular/core';

import Profil from '../../../dto/profil';
import App from '../../../dto/app';


@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.css']
})
export class ProfilListComponent extends OnInit {
  private profils: Profil[];

  constructor() {
    super();

  }

  ngOnInit() {
    // Creer une function dans les GesLogService pour recuperer tous les applications

  }





}
