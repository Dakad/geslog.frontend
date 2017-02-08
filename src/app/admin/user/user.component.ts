import { Component, OnInit } from '@angular/core';
import User from '../../dto/user';
import Appli from '../../dto/appli';

import { GeslogAdminService } from '../geslog-admin.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
	private users: User[];
	private selectedUser: User;
	constructor(private _geslog: GeslogAdminService) { }

    ngOnInit() {
        this._geslog.listApplis().subscribe(data => this.users = data);
    }

    onUpsert(event: User) {
        this.selectedUser = (event) ? event : new User();
    }


    onUpsertAppli(user: User) {
        console.log(user);
        // Call the upsert method on GeslogAdminService to send user
        // this._geslog.
    }

}
