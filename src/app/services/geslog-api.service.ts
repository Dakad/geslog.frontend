import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { env } from '../../environments/environment';

import { User,Information } from '../dto/user';


@Injectable()
export class GeslogService implements OnInit {
    protected _urlToApi: string = env.api.url;
    protected _head: Headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(protected _http: Http, protected _opts: RequestOptions) {
        this._head.append('Accept', 'application/json');  
     }

    ngOnInit() { }

    /**
     * Allow the std to get his logins
     */
    public getStudLogins(matricule?: number | string): Observable<Information[]> {
        let url: string = env.api.getStudLogins;
        matricule = (!matricule) ? localStorage.getItem('userMatricule') : matricule;
        //let url:string  =  'logins/${matricule}';
        return this._http.get(`${this._urlToApi}/${url}/${matricule}`)
            .map(res => res.json().data as Information[])
            .catch(err => this.handleError(err));
    }



    protected extractData(res: Response, extractFct: Function,returnType:any) {
        const data = res.json().data;
        let extract;
        if (Array.isArray(data)) {
            extract = [];
            let tmpType = {};
            data.forEach((val, i) => {
                extractFct.call(returnType, val);
                extract.push(returnType);
            });
        } else {
            extractFct.call(extract, data);
        }
        return extract;
    }


    protected handleError(error: Response | any)  {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.err || JSON.stringify(body);
            errMsg = `Error ${error.status} (${error.statusText || ''})  ${err.status} -> ${err.message}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.of(errMsg) as Observable<any>;
    }
}