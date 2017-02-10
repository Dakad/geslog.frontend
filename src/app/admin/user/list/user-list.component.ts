import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { User } from '../../../dto/user';


import { GeslogService } from '../../../services/geslog-api.service';
import { StanizerService } from '../../../stanizer.service';

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
  @Input() private mode: string;
  // @Output() private selected: User;
  @Output('select') private selectRequest: EventEmitter<User>;
  @Output('selectAction') private selectedAction: EventEmitter<string>;
  checked: boolean[] = [];
  selectionDisponible: boolean = false;
  datas: Information[];
  href;
   private filtres: string[] = [];
  private firstname: string = 'firstname';
  private login: string = 'login';
  private matricule: string = 'matricule';
  private email: string = 'email';
  private type: string = 'type';
  constructor(private geslog: GeslogService, private stanizerService: StanizerService) {
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
    this.selectAction("cree");
  }

  upload() {
    console.log('Missing the upload function');
  }

  checkAll(event) {
    for (let i = 0; i < this.list.length; i++)
      this.list[i].checked = event.target.checked;
    this.selectionDisponible = event.target.checked;
    this.loadDownloadFile();
  }
  updateChecked(user, event) {
    let ok: boolean = false;
    for (let i = 0; i < this.list.length; i++)
      if (this.list[i].checked) {
        this.selectionDisponible = true;
        ok = true;
        break;
      }
    this.selectionDisponible = ok;
    this.loadDownloadFile();
  }

  loadDownloadFile() {
    let texteAImprimer: string = "";
    for (let i = 0; i < this.list.length; i++)
      if (this.list[i].checked) {
        this.geslog.getStudLogins(this.list[i].matricule);
        texteAImprimer += "Logins de l'utilisateur " + this.list[i].lastName + " : \n";
        for (let j = 0; j < this.datas.length; j++) {
          texteAImprimer += `\tNom Logiciel : ${this.datas[j].name} \n\t\tLogin : ${this.list[i].login}  Password :  ${this.datas[j].password} \n`;
        }
      }
    var uri = "data:application/txt;charset=UTF-8," + encodeURIComponent(texteAImprimer);
    this.href = this.stanizerService.sanitize(uri);


  }
   
   filtrer(element: string, valeur: string): boolean {
    if (!valeur)
      return true;
    if (valeur == "")
      return true;
    return element.toLowerCase().includes(valeur.toLowerCase());
  }

  listeFiltre(): User[] {
    let listR: User[] = [];
    if (!this.list)
      return listR;
    let compteur: number = 0;
    for (let i = 0; i < this.list.length; i++) {
      let ok: boolean = false;
      ok = this.filtrer(this.list[i].firstname, this.filtres[this.firstname]) &&
        this.filtrer(this.list[i].login, this.filtres[this.login]) &&
        this.filtrer(this.list[i].matricule, this.filtres[this.matricule]) &&
        this.filtrer(this.list[i].email, this.filtres[this.email]) &&
        this.filtrer(this.list[i].type, this.filtres[this.type]);
      if (ok) {
        listR[compteur] = this.list[compteur];
        compteur++;
      }
    }
    return listR;
  }
}
