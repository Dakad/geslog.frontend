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
        return this._http.get(url).map(res => res.json().data as Appli[]);
    }

    /**
    * UserList
    */
    public listUsers(): Observable<User[]> {
        const url = 'app/mocks/api-users-list-res.json';
        return this._http.get(url).map(res => res.json().data as User[]);
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
                data.forEach((val) => tabs.push(Profil.extractFromRawData(val)));
                // console.log(tabs);
                return tabs;
            });
    }


    public getProfilById(id: number | string): Observable<Profil> {
        return null;
        // return this._http.get
    }

    public getAppliById(id:number | string):Observable<Appli>{
        return null;
    }


}