import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'app works!';
  private static alertMessage:string ;
  private static alertType:string;
  private static showalert:boolean = false;
  ngOnInit() {

  }
//Types  alert-warning alert-danger alert-success alert-info
  public static printAlert(alertMessage:string , alertType?: string , printTime?:number ){
      if(!alertType){
          alertType = "warning";
      }
      NavbarComponent.alertMessage = alertMessage;
      NavbarComponent.alertType = alertType;
      NavbarComponent.showalert = true;
      setTimeout(function() {
      NavbarComponent.showalert = false;
      }.bind(NavbarComponent), printTime);
  }
  public printAlert2(alertMessage:string , alertType?: string , printTime?:number ){
      NavbarComponent.printAlert(alertMessage , alertType , printTime );
  }
  public getShowalert():boolean{
     return NavbarComponent.showalert;
  }
   public getAlertType():string{
     return NavbarComponent.alertType;
  }
   public getAlertMessage():string{
     return NavbarComponent.alertMessage;
  }
}
