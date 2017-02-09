import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { User } from '../../../dto/user';


import { GeslogService } from '../../../services/geslog-api.service';
import {StanizerService} from '../../../stanizer.service';

export class Information {
  name: string;
  password: string;
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
   providers: [StanizerService]
})


export class UserListComponent implements OnInit {
  @Input() private list: User[];
  @Input() private mode:string;
  // @Output() private selected: User;
  @Output('select') private selectRequest: EventEmitter<User>;
  @Output('selectAction') private selectedAction: EventEmitter<string>;
  checked: boolean[] = [];
  selectionDisponible: boolean = false;
  datas : Information[];
  href;
  constructor(private geslog: GeslogService,private stanizerService: StanizerService) {
    this.selectRequest = new EventEmitter<User>();
    this.selectedAction = new EventEmitter<string>();
    
  }

  ngOnInit() { 
    this.geslog.getStudLogins().subscribe(res => this.datas = res);
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

  upload(){
    console.log('Missing the upload function');
  }

  checkAll(event){
    for(let i=0 ; i < this.list.length  ; i++)
        this.list[i].checked =event.target.checked;
    this.selectionDisponible = event.target.checked;
    this.loadDownloadFile();
  }
  updateChecked(user, event) {
      let ok:boolean = false;
      for(let i=0 ; i < this.list.length  ; i++)
        if(this.list[i].checked){
          this.selectionDisponible =true;
          ok = true;
          break;
        }
      this.selectionDisponible = ok;
      this.loadDownloadFile();
  }

  loadDownloadFile(){
      let texteAImprimer:string = "" ;
      for(let i=0 ; i < this.list.length  ; i++)
        if(this.list[i].checked){
          this.geslog.getStudLogins(this.list[i].matricule);
          texteAImprimer +=  "Logins de l'utilisateur " + this.list[i].name + " : \n";
          for(let j=0 ; j < this.datas.length  ; j++){
              texteAImprimer += "\tNom : " + this.datas[j].name + " Password : " + this.datas[j].password + "\n";
          }
        }
      var uri = "data:application/txt;charset=UTF-8," + encodeURIComponent(texteAImprimer);
      this.href = this.stanizerService.sanitize(uri);
      

  }
}
