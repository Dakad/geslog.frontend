import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import AuthService from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
  private _router: Router;
  data = { "username": "", "password": "", "matricule": "", "type": "" };

  constructor(public _authService: AuthService, public router: Router) { }

  formSubmit() {
    this._authService.login(this.data).subscribe((user) => {
      if (!this._authService.isLogged)
        return;
      this.router.navigate(['/' + user.type]);
    });

  }
  
  ngOnInit() {
  }

};
