import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import User from '../../../dto/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {
  @Input() private list: User[];
 // @Output() private selected: User;
 @Output('select') private selectRequest: EventEmitter<User>;

checked: boolean[] = [];

  constructor() {
    this.selectRequest = new EventEmitter<User>();
  }

  ngOnInit() { }


  select(selected: User) {
    this.selectRequest.emit(selected);
  }

  create() {
    this.selectRequest.emit();
  }
  updateChecked(user,  event) {
    this.checked[user]=event.target.checked; // or `event.target.value` not sure what this event looks like
    console.log("in " + this.checked[user] + " : " + this.checked.length  );
    for(let userI  in this.checked)
      console.log(userI instanceof User + " : " + this.checked[userI]);
  }
}
