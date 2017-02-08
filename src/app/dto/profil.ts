
import Appli from './appli';

export default class Profil {
    private _id: number;
    private _year: string;
    private _section: string;

    private _apps: Appli[];


    constructor(year: string, sect: string, id?: number) {
        this.year = year;
        this.section = sect;
        this._id = id;
        this._apps = [];
    }

    /**
     * extractFromRawData
     */
    static extractFromRawData(raw: any): Profil {
        return new Profil(raw.year, raw.sect, raw.idProfil);
    }


    public get apps(): Appli[] {
        return this._apps;
    }
    /**
     * addApp
     */
    public addApp(app: Appli) {
        this._apps.push(app);
    }


    public get section(): string {
        return this._section;
    }
    public set section(v: string) {
        this._section = v;
    }

    public get year(): string {
        return this._year;
    }
    public set year(v: string) {
        this._year = v;
    }

    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }


}