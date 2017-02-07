import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
        <input type="file" name="users" [(ngModel)]=inputFile (change)=sendFile() >
    `
})
export default class SecretariatComponent implements OnInit {
    private inputFile;
    
    constructor() { }

    ngOnInit() { }

    /**
     * Sendd users.csv to API
     */
    public sendFile() {
        console.log(this.inputFile);
    }
}