import { Component, Output, Input, OnInit } from '@angular/core';

import Profil from '../../dto/profil';


@Component({
  selector: 'app-profil-list',
  template: ` 
    <div class="list-group">
      <a class="list-group-item active" 
        *ngFor="let profil of list" (click)="selected=profil" 
        [class.selected]="profil.id === selected.id"
        >
        {{profil.name}}
      </a>
      <a class="list-group-item" (click)="selected=profil">
        Dapibus ac facilisis in
      </a>
      <a class="list-group-item" (click)="selected=profil">
        Profilö dum morbis
      </a>
    </div>
  `
})
export class ProfilListComponent implements OnInit {
  @Input() private list: Profil[];
  @Output() private selected: Profil;

  constructor() {
  }

  ngOnInit() {
    // Creer une function dans les GesLogService pour recuperer tous les applications

  }





}
