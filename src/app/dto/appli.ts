
export default class Appli {
    public id: number;
    public name: string;

    public format: string;


    constructor(name?: string, format?: string, id?: number) {
        this.name = name;
        this.format = format;
        this.id = id;
    }

    public static extractFromRawData(raw:any){
        return new Appli(raw.name,raw.format,raw.id);
    }



}