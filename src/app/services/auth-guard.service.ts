import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  CanActivate,
  CanLoad,
  NavigationExtras,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import AuthService from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  private _url: string;

  constructor(private _authService: AuthService, private _router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this._url = state.url;

    return this.checkLogin(this._url);
  }

  /**
   * 
   */
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }


  /**
   * 
   */
  canLoad(route: Route): boolean {
    this._url = `/${route.path}`;

    return this.checkLogin(this._url);
  }


  /**
   * 
   */
  checkLogin(url: string): boolean {
    if (this._authService.isLogged) { return true; }

    // Store the attempted URL for redirecting
    this._authService.redirectUrl = url;

    // Create a dummy session id
    const sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this._router.navigate(['/login'], navigationExtras);
    return false;
  }
}
