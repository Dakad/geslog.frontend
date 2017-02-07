import { Component, OnInit  } from '@angular/core';
import { Router }            from '@angular/router';
import { Http }       from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	data = {"username":"" , "password":"" ,"matricule":"" , "connectionType":""};
	 constructor(private router: Router) {}
	private _router: Router;
	formSubmit(){
		console.log("lol: " + this.data);
		  switch (this.data.connectionType) {
            case "Etudiant" :
                if(this.data.matricule == "etudiant")
            		this.router.navigate(['/etudiant'],this.data.matricule);
                break;
            case  "Admin" :
            	console.log("In Admin ");
                if(this.data.password == "admin")
					this.router.navigate(['/admin']);
                break;
            case "Secretaire":
            	if(this.data.password == "secretaire")
            		this.router.navigate(['/secretaire'],this.data.username);
            	break;
            default:

        }
	}	

 

  ngOnInit() {
  }

};
