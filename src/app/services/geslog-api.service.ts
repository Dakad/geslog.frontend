import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class GeslogService implements OnInit {
    protected _urlToApi: string = 'app/mocks';
    protected _head: Headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(protected _http: Http, protected _opts: RequestOptions) {

    }

    ngOnInit() {
        this.getToken();

    }

    private getToken() {
        console.log('Get getToken')
        this._http.post(`${this._urlToApi}/auth/`, {}, this._opts).map(res => res.json());
    }


    /**
     * Allow the std to get his logins
     */
    public getStudLogins(matricule?: number | string) {
        matricule = (!matricule) ? localStorage.getItem('userMatricule') : matricule;
        let url:string  =  'api-logins.json';
         //let url:string  =  'logins/${matricule}';
       return this._http.get(`${this._urlToApi}/${url}`).map(res => res.json().data);
    
       //return this._http.get('app/mocks/api-logins.json').map(res => res.json().data);
       
    }


    private extractData(res: Response) {
        const body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}