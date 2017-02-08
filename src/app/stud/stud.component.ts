import { Component, OnInit } from '@angular/core';

import { GeslogService } from '../services/geslog-api.service';
import {DomSanitizer} from '@angular/platform-browser';

export class Information {
  name: string;
  password: string;
}

const INFOS : Information[] = [{  name : "TadaApp" ,  password : 'abc'}, {name: 'autreApp',password: 'azerty'}];
@Component({
  moduleId: module.id,
  selector: 'app-stud',
  templateUrl: 'stud.component.html',

})
export class StudComponent implements OnInit {

  private logins: any[];
    sanitizedUrl;
  infos = INFOS;
  href;
  //private sanitizer:DomSanitizer;
  constructor(private _geslog: GeslogService,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    //this._geslog.getStudLogins().subscribe(logins => this.logins = logins);;
    this.download();
  }



 download() {
  
    var theJSON = JSON.stringify(this.infos);
    let texteAImprimer = "";
    for(let i=0 ;i < this.infos.length ; i++){
      texteAImprimer += this.infos[i].name + " : " + this.infos[i].password + " \n";
    }
    var uri = "data:application/txt;charset=UTF-8," + encodeURIComponent(texteAImprimer);
    console.log("Url : " + uri);
    this.href = this.sanitize(uri);;
  } 
 sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}