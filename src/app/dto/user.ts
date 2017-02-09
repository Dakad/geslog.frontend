
import Appli from './appli';
import Profil from './profil';


export enum UserType{
    STUD, PROF,GUEST
}


export class User {
    private _firstName: string;
    private _name: string;
    private _orientation: string;
    private _email: string;
    private _matricule: string;
    private _type: string;
    private _login: string;
    private _profil: Profil;
    private _checked: boolean = false;

    constructor() {
        this._checked = false;
    }

    /**
     * extractFromRawData
     */
    static extractFromRawData(raw: any): User {
        return new User();
    }


    public get firstname(): string {
        return this._firstName;
    }

    public set firstname(v: string) {
        this._firstName = v;
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

    public get checked(): boolean {
        return this._checked;
    }

    public set checked(v: boolean) {
        this._checked = v;
    }




}