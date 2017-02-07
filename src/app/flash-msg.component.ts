import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="alert alert-dismissible alert-warning">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <h4 *ngIf="flash.title">{{flash.title}}</h4>
      <p>{{flash.msg}}</p>
    </div>
    
    
  `
})
export default class FlashMsgComponent implements OnInit {
  private flash = {
    type: 'info',
    title: '',
    msg: ''
  };

  constructor() { }

  ngOnInit() { }
}