import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export default class AuthService {
  private _redirectUrl: string;
  private _apiUrl: string = 'app/mocks/api-user-connect-res.json';


  constructor(/*private _headers: Headers,*/ private _http: Http) { }

  public login(inputData): Observable<any> {
    return this._http.get(this._apiUrl)
      .map(res => {
        const data = res.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('type', data.token);
        return data;
      });
  }

  public logout(): void {
    // Destroy the token in the LocalStorage
    localStorage.removeItem('token');
    localStorage.removeItem('type');
  }


  public get isLogged(): boolean {
    // Go check if exists an token in the LocalStorage
    return localStorage.getItem('token') !== null;
  }


  public get redirectUrl(): string {
    return this._redirectUrl;
  }


  public set redirectUrl(v: string) {
    this._redirectUrl = v;
  }



}
