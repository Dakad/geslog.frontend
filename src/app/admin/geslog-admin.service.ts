import 'rxjs/add/operator/map';
import { Injectable, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { env } from '../../environments/environment';

import Appli from '../dto/appli';
import Profil from '../dto/profil';
import { User } from '../dto/user';

import { GeslogService } from '../services/geslog-api.service';



@Injectable()
export class GeslogAdminService extends GeslogService {

    constructor(protected _http: Http, protected _opts: RequestOptions) {
        super(_http, _opts);
    }



    public listApplis(): Observable<Appli[]> {
        const url = env.api.getApplis;
        return this._http.get(`${this._urlToApi}/${url}`)
            .map(res => res.json().data as any[])
            .map(data => {
                const tabs: Appli[] = [];
                data.forEach((val) => tabs.push(Appli.extractFromRawData(val)));
                return tabs;
            });
    }


    public listUsers(): Observable<User[]> {
        const url = env.api.getUsers;
        return this._http.get(`${this._urlToApi}/${url}`)
            .map(res => res.json().data as any[])
            .map(data => data.map((val) => User.extractFromRawData(val)));
    }


    public listProfils(): Observable<Profil[]> {
        const url = env.api.getProfils;
        return this._http.get(`${this._urlToApi}/${url}`)
            .map(res => res.json().data as any[])
            .map(data => {
                const tabs: Profil[] = [];
                data.forEach((val) => tabs.push(Profil.extractFromRawData(val)));
                return tabs;
            }).catch(err => this.handleError(err));
    }


    public getProfilById(id: number | string): Observable<Profil> {
        const url = env.api.getProfils;
        console.log("in ");
        return this._http.get(`${this._urlToApi}/${url}/${id}`)
            .map(res => res.json().data)
            .map(data => Profil.extractFromRawData(data));
    }

    /**
 * upsertProfil
 */
    public upsertProfil(profil: Profil) {
        const url = env.api.upsertProfil;
        return this._http.post(`${this._urlToApi}/${url}`, profil)
            .map(res => res.json().data)
    }
    public upsertUser(user: User) {
        const url = env.api.upsertUser;
        return this._http.post(`${this._urlToApi}/${url}`, user)
            .map(res => res.json().data)
    }


    public getAppliById(id: number | string): Observable<Appli> {
        const url = env.api.getApplis;
        return this._http.get(`${this._urlToApi}/${url}/${id}`)
            .map(res => Appli.extractFromRawData(res.json().data));
    }

    public upsertAppli(appli: Appli) {
        const url = env.api.upsertAppli;
        return this._http.post(`${this._urlToApi}/${url}`, appli)
            .map(res => res.json().data)
    }

    public generateAppliScript(appli:Appli) {
        const url = env.api.getScript;
        return this._http.get(`${this._urlToApi}/${url}/${appli.id}`)
            .map(res => Appli.extractFromRawData(res.json().data)).catch(err => this.handleError(err));
    }

    public deleteAppli(appli:Appli){
        const url = env.api.getApplis;
        return this._http.delete(`${this._urlToApi}/${url}/${appli.id}`)
            .map(res => Appli.extractFromRawData(res.json().data));
    }


}