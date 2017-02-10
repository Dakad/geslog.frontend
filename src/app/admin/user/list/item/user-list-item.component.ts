import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { User } from '../../../../dto/user';


@Component({
  selector: '[app-user-list-item]',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css'],
})


export class UserListItemComponent implements OnInit {
  @Input('item') private user: User;
  @Input() private mode: string;
  // @Output() private selected: User;
  @Output('select') private selectRequest: EventEmitter<User>;
  @Output('selectAction') private selectedAction: EventEmitter<string>;
  checked: boolean[] = [];
  selectionDisponible: boolean = false;

  href;
  constructor() {
    this.selectRequest = new EventEmitter<User>();
    this.selectedAction = new EventEmitter<string>();

  }

  ngOnInit() {
  }


  select(selected: User) {
    this.selectRequest.emit(selected);
  }

  selectAction(selectedAction: string) {
    this.selectedAction.emit(selectedAction);
  }

  create() {
    this.selectAction("modifier");
  }

  upload() {
    alert('Missing the upload function');
  }

  checkAll(event) {
    
  }

}
