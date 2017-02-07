import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { GeslogService } from '../services/geslog-api.service';

@Injectable()
export default class SecretariatService extends GeslogService {
    private _urlToAPI: string;

    constructor(protected _head: Headers, protected _http: Http, protected _opts: RequestOptions) {
        super(_head, _http, _opts);
    }

    sendUserCSV() {

    }
}