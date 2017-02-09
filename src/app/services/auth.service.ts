import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { User, UserType } from '../dto/user';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export default class AuthService {
  private _redirectUrl: string;
  // private _apiUrl: string = 'http://ip_api';
  private _apiUrl: string = 'app/mocks/';


  constructor(private _http: Http) { }

  public login(inputData): Observable<any> {
    // const url = 'connect';
    const url = 'api-user-connect-res.json';
    // return this._http.post(`${this._apiUrl}/${url}`, inputData)
    return this._http.get(`${this._apiUrl}/${url}`, inputData)
      .map(res => {
        const data = res.json().data;
        localStorage.setItem('token', data.token);
        localStorage.setItem('type', data.type);
        if (data.type === 'STUD') {
          localStorage.setItem('studMatricule', data.Matricule);
        }
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

  public get type(): string {
    return localStorage.getItem('type');
  }


  public get redirectUrl(): string {
    return this._redirectUrl;
  }


  public set redirectUrl(v: string) {
    this._redirectUrl = v;
  }



}
