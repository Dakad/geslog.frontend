
import Appli from './appli';

export default class Profil {
    public id: number;
    public name: string;
    public apps: Appli[];


    constructor(name?: string, id?: number) {
        this.name = name;
        this.id = id;
        this.apps = [];
    }

    /**
     * extractFromRawData
     */
    static extractFromRawData(raw: any): Profil {
        const nProfil = new Profil(raw.name, raw.id);
       // nProfil.app() =  [];
        if (raw.apps) {
            raw.apps.forEach((rawApp) => nProfil.addApp(Appli.extractFromRawData(rawApp)));
        }
        return nProfil;
    }

   /**
     * addApp : Just push  an Appli into the tab
     */
    public addApp(app: Appli) {
        this.apps.push(app);
    }

    public resetApps() {
        this.apps = [];
    }
}