import { Component, OnInit } from '@angular/core';

import { GeslogAdminService } from '../geslog-admin.service';
import { GeslogService } from '../../services/geslog-api.service';
import { StanizerService } from '../../stanizer.service';

import { User, UserType, Information } from '../../dto/user';
import Appli from '../../dto/appli';
import Profil from '../../dto/profil';


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
    private types: string[];// =  Object.keys(UserType) ;// ['stud','prof','guest'];
    private typesValues: string[] = [];
    private selectedUser: User;
    private newUser: User;
    private selectedAction: string = "normal";
    hasSelectedAnUser: boolean = false;
    isCreating: boolean = false;
    href;
    constructor(private _geslog: GeslogAdminService, private stanizerService: StanizerService) {

        this.types = Object.keys(UserType);
        for (let i = 0; i < this.types.length; i++) {
            this.typesValues[this.types[i]] = UserType[this.types[i]];
        }
    }


    ngOnInit() {
        this._geslog.listUsers().subscribe(data => this.users = data);
        this._geslog.getStudLogins().subscribe(res => {
            this.infos = res
            if(!res)
            this.infos = [];
        });
        this._geslog.listProfils().subscribe(res => this.profils = res);
    }

    onUpsert(event: User) {
        for (let i = 0; i < this.users.length; i++)
            for (let j = 0; j < this.profils.length; j++)
                if (this.users[i].idProfile == this.profils[j].id)
                    this.users[i].profil = this.profils[j];
        this.selectedUser = (event) ? event : User.extractFromRawData({});
        this.hasSelectedAnUser = true;
        this.selectedAction = "normal";
        this.isCreating = false;
    }

    onUpsertAction(action: string) {
        this.selectedAction = (action) ? action : "normal";
        if (action === 'cree') {
            this.create();
        }
        // console.log(this.selectedAction);
    }

    onUpsertAppli(user: User) {
        //console.log(user);
        // Call the upsert method on GeslogAdminService to send user
        // this._geslog.
    }

    getInfos(user: User): Information[] {
        if(!user.matricule)
            return [];
        this._geslog.getStudLogins(user.matricule);
        this.loadDownloadFile();
        return this.infos;
    }

    loadDownloadFile() {
        let texteAImprimer: string = "";
        texteAImprimer += "Logins de l'utilisateur " + this.selectedUser.firstName + " : \n";
        for (let j = 0; j < this.infos.length; j++) {
            texteAImprimer += "\tNom : " + this.infos[j].name + " Password : " + this.infos[j].password + "\n";
        }
        if (this.infos.length == 0)
            texteAImprimer += "\t Aucun logins disponible";

        var uri = "data:application/txt;charset=UTF-8," + encodeURIComponent(texteAImprimer);
        this.href = this.stanizerService.sanitize(uri);
    }

    create() {
        this.hasSelectedAnUser = false;
        this.selectedAction = "modifier";
        this.isCreating = true;
        this.newUser = User.extractFromRawData({});
    }
    modifUser() {
        console.log(this.selectedUser);
        this._geslog.upsertUser(this.selectedUser)
                    .subscribe(data => alert('User updated ! Refresh to see on the list'));
    }

    addUser(user: User) {
        console.log(this.newUser);
        this._geslog.upsertUser(this.newUser)
                    .subscribe(data => alert('User created ! Refresh to see on the list'));
    }


    removeUser(user: User) {

    }

}
