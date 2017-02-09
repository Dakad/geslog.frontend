import { Component, OnInit } from '@angular/core';
import {User, UserType} from '../../dto/user';
import Appli from '../../dto/appli';

import { GeslogAdminService } from '../geslog-admin.service';
import { GeslogService } from '../../services/geslog-api.service';
import {StanizerService} from '../../stanizer.service';

import Profil from '../../dto/profil';

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
    private profils: Profil[];
    private infos: Information[];
    private types:string[] ;// =  Object.keys(UserType) ;// ['stud','prof','guest'];
    private typesValues:string[] =[];
	private selectedUser: User;
    private newUser: User ;
    private selectedAction: string = "normal";
    hasSelectedAnUser : boolean = false;
    isCreating:boolean = false;
    href;
	constructor(private _geslog: GeslogAdminService,private geslog: GeslogService,private stanizerService: StanizerService) {

        var valeurs = Object.keys(UserType);
        this.types = valeurs.slice(valeurs.length / 2);
        this.typesValues['STUD'] = "Étudiant";
        this.typesValues['PROF'] = "Professeur";
        this.typesValues['GUEST'] = "Invité";
    }

    ngOnInit() {
        this._geslog.listUsers().subscribe(data => this.users = data);
        this.geslog.getStudLogins().subscribe(res => this.infos = res);
        this._geslog.listProfils().subscribe(res => this.profils = res);
        console.log("looo");              
    }

    onUpsert(event: User) {
        for(let i = 0 ; i < this.users.length ; i++)
         for(let j = 0 ; j < this.profils.length ; j++)
            if(this.users[i].idProfile == this.profils[j].id)
                this.users[i].profil = this.profils[j];
        this.selectedUser = (event) ? event : new User("","","", "" , "" , "" , "" , 0);
        this.hasSelectedAnUser = true;
        this.selectedAction = "normal";
        this.isCreating = false; 
        console.log(this.selectedUser);
    }

    onUpsertAction(action: string){
        this.selectedAction = (action) ? action : "normal";
       // console.log(this.selectedAction);
    }

    onUpsertAppli(user: User) {
        //console.log(user);
        // Call the upsert method on GeslogAdminService to send user
        // this._geslog.
    }

    getInfos(user:User) : Information[] {
        this.geslog.getStudLogins(user.matricule);
        this.loadDownloadFile();
        return this.infos;
    }

    loadDownloadFile(){
        let texteAImprimer:string = "" ;
        texteAImprimer +=  "Logins de l'utilisateur " + this.selectedUser.name + " : \n";
        for(let j=0 ; j < this.infos.length  ; j++){
            texteAImprimer += "\tNom : " + this.infos[j].name + " Password : " + this.infos[j].password + "\n";
        }
        if(this.infos.length == 0)
            texteAImprimer += "\t Aucun logins disponible";
    
        var uri = "data:application/txt;charset=UTF-8," + encodeURIComponent(texteAImprimer);
        this.href = this.stanizerService.sanitize(uri);
  }

  create(){
        this.hasSelectedAnUser = false;
        this.selectedAction = "modifier";
        this.isCreating = true;
        this.newUser = new User("","","", "" , "" , "" , "" , 0);
  }
  modifUser(){
  }
  addUser(user:User){
   //     console.log(this.newUser);
  }
  removeUser(user:User){

  }

}
