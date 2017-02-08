import { Injectable, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { GeslogService } from '../services/geslog-api.service';

@Injectable()
export class GeslogAdminService extends GeslogService {

    private

    constructor(protected _http: Http, protected _opts: RequestOptions) {
        super(_http, _opts);
    }


    /**
     * listApplis
     */
    public listApplis() {
        const url = 'app/mocks/api-applis-list-res.json';
        return this._http.get(url).map(res => res.json().data);
    }

    /**
    * UserList
    */
     public listUsers() {
        const url = 'app/mocks/api-users-list-res.json';
        return this._http.get(url).map(res => res.json().data);
    }

    /**
     * listProfils
     */
    public listProfils() {
        const url = 'app/mocks/api-profils-list-res.json';
        return this._http.get(url).map(res => res.json().data);
    }

}