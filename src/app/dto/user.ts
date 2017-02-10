
import Appli from './appli';
import Profil from './profil';


export class Information {
  name: string;
  password: string;
}




export const UserType = {
    STUD: 'Etudiant',
    PROF: 'Professeur',
    GUEST: 'Invité'
}


export class User {
    public firstName: string;
    public lastName: string;
    public orientation: string;
    public email: string;
    public matricule: string;
    public type: string;
    public login: string;
    public profil: Profil;
    public idProfile: number;
    public checked: boolean = false;

    constructor(firstname?: string, lastName?: string, orientation?: string, email?: string, matricule?: string, type?: string,
        login?: string, idProfile?: number) {
        this.checked = false;
        this.firstName = firstname;
        this.lastName = lastName;
        this.orientation = orientation;
        this.email = email;
        this.matricule = matricule;
        this.type = type;
        this.login = login;
        this.idProfile = idProfile;
        this.profil = new Profil();
    }

    /**
     * extractFromRawData
     */
    static extractFromRawData(raw: any): User {
        //console.log("test : " + raw.name + " :  " + raw.matricule );
        const user: User = new User(raw.firstname, raw.lastName, raw.orientation, raw.email, raw.matricule, raw.type, raw.login, raw.idProfile);
        return user;
    }




}