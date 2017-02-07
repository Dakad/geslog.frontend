import { Component, OnInit } from '@angular/core';

import Profil from '../../dto/profil';

@Component({
  selector: 'app-profil-add',
  templateUrl: './profil-add.component.html',
  styleUrls: ['./profil-add.component.css']
})
export class ProfilAddComponent extends OnInit {

  private profil: Profil;


  constructor() {
    super();
  }

  ngOnInit() { }


}
