
export default class Appli {
    private _id: number;
    private _name: string;

    private _format: string;


    constructor(name?: string, format?: string, id?: number) {
        this.name = name;
        this.format = format;
        this.id = id;
    }

    public get format(): string {
        return this._format;
    }
    public set format(v: string) {
        this._format = v;
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