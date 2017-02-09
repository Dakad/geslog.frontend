
import Appli from './appli';
import Profil from './profil';


export const UserType = {
    ADMIN : 'Admin',
    STUD: 'Etudiant',
    PROF: 'Professeur',
    GUEST: 'Invité'
}


export class User {
    private _firstname: string;
    private _name: string;
    private _orientation: string;
    private _email: string;
    private _matricule: string;
    private _type: string;
    private _login: string;
    private _profil: Profil;
    private _idProfile: number;
    private _checked: boolean = false;

    constructor(firstname?: string, name?: string, orientation?: string, email?: string, matricule?: string, type?: string,
        login?: string, idProfile?: number) {
        this._checked = false;
        this._firstname = firstname;
        this._name = name;
        this._orientation = orientation;
        this._email = email;
        this._matricule = matricule;
        this._type = type;
        this._login = login;
        this._idProfile = idProfile;
    }

    /**
     * extractFromRawData
     */
    static extractFromRawData(raw: any): User {
        //console.log("test : " + raw.name + " :  " + raw.matricule );
        const user: User = new User(raw.firstname, raw.name, raw.orientation, raw.email, raw.matricule, raw.type, raw.login, raw.idProfile);
        return user;
    }


    public get firstname(): string {
        return this._firstname;
    }

    public set firstname(v: string) {
        this._firstname = v;
    }

    public get name(): string {
        return this._name;
    }

    public set name(v: string) {
        this._name = v;
    }

    public get orientation(): string {
        return this._orientation;
    }

    public set orientation(v: string) {
        this._orientation = v;
    }

    public get email(): string {
        return this._email;
    }

    public set email(v: string) {
        this._email = v;
    }

    public get matricule(): string {
        return this._matricule;
    }

    public set matricule(v: string) {
        this._matricule = v;
    }

    public get type(): string {
        return this._type;
    }

    public set type(v: string) {
        this._type = v;
    }



    public get login(): string {
        return this._login;
    }

    public set login(v: string) {
        this._login = v;
    }



    public get profil(): Profil {
        return this._profil;
    }

    public set profil(v: Profil) {
        this._profil = v;
    }

    public get idProfile(): number {
        return this._idProfile;
    }

    public set uiProfile(v: number) {
        this._idProfile = v;
    }

    public setProfil(v: Profil) {
        this._profil = v;
    }
    public get checked(): boolean {
        return this._checked;
    }

    public set checked(v: boolean) {
        this._checked = v;
    }




}