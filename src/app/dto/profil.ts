
import Appli from './appli';

export default class Profil {
    private _id: number;
    private _name: string;

    private _apps: Appli[];


    constructor(name?: string, id?: number) {
        this.name = name;
        this.id = id;
        this._apps = [];
    }

    /**
     * extractFromRawData
     */
    static extractFromRawData(raw: any): Profil {
        const nProfil = new Profil(raw.name, raw.id);
        if (raw.apps) {
            raw.apps.forEach((rawApp) => nProfil.addApp(Appli.extractFromData(rawApp)));
        }
        return nProfil;
    }


    public get apps(): Appli[] {
        return this._apps;
    }
    /**
     * addApp : Just push  an Appli into the tab
     */
    public addApp(app: Appli) {
        this._apps.push(app);
    }

    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }


}