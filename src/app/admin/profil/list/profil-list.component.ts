import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

import Profil from '../../../dto/profil';


@Component({
  selector: 'app-profil-list',
  template: ` 
    <h2 class="">
      <small class="pull-left">
        <button class="btn btn-primary" title="Ajouter un profil" (click)=create()>
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </small>
       &nbsp;Liste des profils
    </h2>
    
    <div class="list-group">
      <h5 class="list-group-item" 
          *ngFor="let profil of list" (click)="select(profil)"
      >
        {{profil.name}}
      </h5>

    </div>
  `
})
export class ProfilListComponent implements OnInit {
  @Input() private list: Profil[];

  @Input() private mode:string;
  private selected: Profil;
  @Output('select') private selectRequest: EventEmitter<Profil>;


  constructor() {
    this.selectRequest = new EventEmitter<Profil>();
    this.list = [];
  }

  ngOnInit() { console.log(this.list); }

  select(selectedProfil: Profil) {
    if (selectedProfil !== this.selected) {
      this.selected = selectedProfil;
      this.selectRequest.emit(this.selected);
    }
  }

  create() {
    this.selectRequest.emit();
  }



}
