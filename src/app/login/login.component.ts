import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import AuthService from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private _router: Router;
  data = { "username": "", "password": "", "matricule": "", "type": "admin" };

  constructor(public _authService: AuthService, public router: Router) { }

  ngOnInit(){
    if(this._authService.isLogged){
      this.router.navigateByUrl(this._authService.type);
    }
  }

  formSubmit() {
    this._authService.login(this.data).subscribe((user) => {
      if (!this._authService.isLogged)
        return;
      console.log(user);
      if(user.type === 'STUD')
        user.type += `/${user.matricule}`;
      this.router.navigate(['/' + user.type]);
    });

  }


};
