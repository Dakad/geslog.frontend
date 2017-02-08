import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
   
    <app-navbar></app-navbar>


  <div class="main" style="margin-top: 5em;">
      <div class="container" >
        <router-outlet></router-outlet>  
      </div>
  </div>
  `
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
