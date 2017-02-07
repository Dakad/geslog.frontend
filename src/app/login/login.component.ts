import { Component, OnInit  } from '@angular/core';
import { Router }            from '@angular/router';
import { Http }       from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	data = {"username":"" , "password":""};
	 constructor(private router: Router) {}
	private _router: Router;
	formSubmit(){
		console.log("lol: " + this.data.username);
		if(this.data.username == "admin" && this.data.password == "admin"){
			this.router.navigate(['/admin']);
		}else{
			alert("Who are you ? ");
		}
	}	

 

  ngOnInit() {
  }

};
