
import Appli from './appli';
import Profil from './profil';


export const UserType = {
    ADMIN : 'Admin',
    STUD: 'Etudiant',
    PROF: 'PRofesseur',
    GUEST: 'Invité'
}


export class User {
    private _firstName: string;
    private _lastName: string;
    private _orientation: string;
    private _email: string;
    private _matricule: string;
    private _type: string;
    private _login: string;
    private _profil: Profil;
    private _checked: boolean = false;

    constructor(firstName?: string, lastName?: string, orientation?: string, email?: string, matricule?: string, type?: string,
        login?: string, idProfile?: number) {
        this._checked = false;
        this._firstName = firstName;
        this._lastName = lastName;
        this._orientation = orientation;
        this._email = email;
        this._matricule = matricule;
        this._type = type;
        this._login = login;
        this._profil = new Profil(null,idProfile);
    }

    /**
     * extractFromRawData
     */
    static extractFromRawData(raw: any): User {
        const user: User = new User(raw.firstName, raw.lastName, raw.orientation, raw.email, raw.matricule, raw.type, raw.login);
        return user;
    }


    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(v: string) {
        this._firstName = v;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(v: string) {
        this._lastName = v;
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


    public get profilId(): number {
        return this.profil.id;
    }

    public set profilId(v: number) {
        this.profil.id = v;
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