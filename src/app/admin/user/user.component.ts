import { Component, OnInit } from '@angular/core';
import {User, UserType} from '../../dto/user';
import Appli from '../../dto/appli';

import { GeslogAdminService } from '../geslog-admin.service';
import { GeslogService } from '../../services/geslog-api.service';
import {StanizerService} from '../../stanizer.service';

export class Information {
  name: string;
  password: string;
}


@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css'],
    providers: [StanizerService]
})
export class UserComponent implements OnInit {
	private users: User[];
    private infos: Information[];
	private selectedUser: User;
    private selectedAction: string = "normal";
    hasSelectedAnUser : boolean = false;;
    href;
	constructor(private _geslog: GeslogAdminService,private geslog: GeslogService,private stanizerService: StanizerService) { }

    ngOnInit() {
        this._geslog.listUsers().subscribe(data => this.users = data);
        this.geslog.getStudLogins().subscribe(res => this.infos = res);
    }

    onUpsert(event: User) {
        this.selectedUser = (event) ? event : new User();
        this.hasSelectedAnUser = true;
        this.selectedAction = "normal";
    }

    onUpsertAction(action: string){
        this.selectedAction = (action) ? action : "normal";
        console.log(this.selectedAction);
    }

    onUpsertAppli(user: User) {
        console.log(user);
        // Call the upsert method on GeslogAdminService to send user
        // this._geslog.
    }

    getInfos(user:User) : Information[] {
        this.geslog.getStudLogins(user.matricule);
        this.loadDownloadFile();
        return this.infos;
    }

    genererLogins(user : User){

    }

    loadDownloadFile(){
        let texteAImprimer:string = "" ;
        texteAImprimer +=  "Logins de l'utilisateur " + this.selectedUser.name + " : \n";
        for(let j=0 ; j < this.infos.length  ; j++){
            texteAImprimer += "\tNom : " + this.infos[j].name + " Password : " + this.infos[j].password + "\n";
        }
    
        var uri = "data:application/txt;charset=UTF-8," + encodeURIComponent(texteAImprimer);
        this.href = this.stanizerService.sanitize(uri);
      

  }
  formSubmit(){
  
  }

}
