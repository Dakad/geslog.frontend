import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export default class AuthService {
  private _isLogged: boolean;
  private _redirectUrl: string;


  constructor(private _headers: Headers, private _http: Http) {
    this._isLogged = false;
  }

  login(): Observable<boolean> {
    // Go check if the user exist and get his data
    return null;
    // Save the token into the LocalStorage
  }

  logout(): void {
    // Destroy the token in the LocalStorage
    this._isLogged = false;
  }


  public get isLogged(): boolean {
    // Go check if exists an token in the LocalStorage
    return this._isLogged;
  }


  public get redirectUrl(): string {
    return this._redirectUrl;
  }


  public set redirectUrl(v: string) {
    this._redirectUrl = v;
  }



}
