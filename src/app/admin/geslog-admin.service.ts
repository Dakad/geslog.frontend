import { Injectable, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import Appli from '../dto/appli';
import Profil from '../dto/profil';
import { User } from '../dto/user';

import { GeslogService } from '../services/geslog-api.service';



@Injectable()
export class GeslogAdminService extends GeslogService {



    constructor(protected _http: Http, protected _opts: RequestOptions) {
        super(_http, _opts);
    }


    /**
     * listApplis
     */
    public listApplis(): Observable<Appli[]> {
        const url = 'app/mocks/api-applis-list-res.json';
        return this._http.get(url)
            .map(res => res.json().data as any[])
             .map(data => {
                const tabs: Appli[] = [];
                data.forEach((val) => tabs.push(Appli.extractFromRawData(val)));
                return tabs;
            });
    }

    /**
    * UserList
    */
    public listUsers(): Observable<User[]> {
        const url = 'app/mocks/api-users-list-res.json';
        return this._http.get(url)
                .map(res => res.json().data as any[])
                .map(data => {
                const tabs: User[] = [];
                let i :number = 0;
                data.forEach((val) => {
                tabs.push(User.extractFromRawData(val));
                //tabs[i].setProfil(Profil.extractFromRawData(this.getProfilById(val.idProfile)));

                //this.getProfilById(val.idProfile).subscribe(p => tabs[i].profil = p);
               // console.log("test 2" + tabs[i].profil.name);
                }
                );
                return tabs;
            });
    }

    /**
     * listProfils
     */
    public listProfils(): Observable<Profil[]> {
        const url = 'app/mocks/api-profils-list-res.json';
        return this._http.get(url)
            .map(res => res.json().data as any[])
            .map(data => {
                const tabs: Profil[] = [];
                data.forEach((val) => {
                tabs.push(Profil.extractFromRawData(val))

                });
                return tabs;
            });
    }


    public getProfilById(id: number | string): Observable<Profil> {
        //let profils: Profil[] = this.listProfils();
        console.log("in " );
        return this.listProfils().map(data => {
                 const tabs: Profil[] = [];
                data.forEach((p) =>  {

                console.log("test " + tabs[0]);
                if(p.id == id)
                    tabs.push(p);
                });
                return tabs[0];
        });
        // return this._http.get
    }

    public getAppliById(id:number | string):Observable<Appli>{
        return null;
    }


}