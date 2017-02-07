import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GeslogService {
    protected url: string = 'http://adress.to/api';


    constructor(protected _head: Headers, protected _http: Http, protected _opts: RequestOptions) {
        this._head.append('Content-Type', 'application/json');
        this._head.append('x-ClientId', 'xxxxxxxxxx');
        this._head.append('x-ClientSecret', 'xxx-xxxxxx-x');
        this._opts.headers = _head;


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