import { Component, OnInit } from '@angular/core';

import { GeslogService } from '../services/geslog-api.service';


@Component({
  moduleId: module.id,
  selector: 'app-stud',
  templateUrl: 'stud.component.html',

})
export class StudComponent implements OnInit {

  private logins: any[];

  constructor(private _geslog: GeslogService) { }

  ngOnInit() {
    this._geslog.getStudLogins().subscribe(logins => this.logins = logins);;
  }



  download() {

  }


}