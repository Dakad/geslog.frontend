import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

import Profil from '../../dto/profil';


@Component({
  selector: 'app-profil-list',
  template: ` 
    <h2 class="">
      <small class="pull-left">
        <button class="btn btn-primary" title="Ajouter un profil" (click)=create()>+</button> &nbsp;
      </small>
       &nbsp;Liste des profils
    </h2>
    <div class="list-group">
      <h5 class="list-group-item" *ngFor="let profil of list"
      >
        {{profil.name}}
      </h5>

    </div>
  `
})
export class ProfilListComponent implements OnInit {
  @Input() private list: Profil[];
  private selected: Profil;
  @Output('select')private selectRequest : EventEmitter<Profil>;


  constructor() {
    this.selectRequest = new EventEmitter<Profil>();
  }

  ngOnInit() {
    // Creer une function dans les GesLogService pour recuperer tous les applications
  }

  select(selectedProfil :Profil){
    this.selectRequest.emit(selectedProfil);
  }

  create(){
    this.selectRequest.emit();
  }



}
