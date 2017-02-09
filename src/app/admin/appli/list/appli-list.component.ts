import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

import Appli from '../../../dto/appli';

@Component({
  moduleId: module.id,
  selector: 'app-appli-list',
  template: `
    <h2 class="">
      <small class="pull-left">
        <button class="btn btn-primary" title="Ajouter un logiciel" (click)=create()>+</button> &nbsp;
      </small>
       &nbsp;Liste des logiciels
    </h2>
    <br>
    <div class="list-group">
      <a class="list-group-item"
        *ngFor="let appli of list" (click)="select(appli)" 
        [class.selected]="selected && appli.id === selected.id">
        <span class="badge badge-info"  *ngIf="appli.format">{{appli.format | uppercase}}</span>
        {{appli.name}} au format <b>{{appli.format || 'Non-défini'}}</b>
      </a>
    </div>
    `
})
export class AppliListComponent implements OnInit {
  @Input() private list: Appli[];
  private selected: Appli;
  @Output('select') private selectRequest: EventEmitter<Appli>;


  constructor() {
    this.selectRequest = new EventEmitter<Appli>();
  }

  ngOnInit() { }


  select(selected: Appli) {
    this.selected = selected;
    this.selectRequest.emit(this.selected);
  }

  create() {
    this.selectRequest.emit();
  }


}