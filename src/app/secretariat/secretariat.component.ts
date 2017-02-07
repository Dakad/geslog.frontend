import { Component, OnInit } from '@angular/core';
import SecretariatService from '../secretariat/secretariat.service';

@Component({
    moduleId: module.id,
    template: `
        <input type="file" name="users" [(ngModel)]=inputFile (change)=sendFile() >
    `
})
export default class SecretariatComponent implements OnInit {
    private inputFile;
    
    constructor(
       private secretariatService: SecretariatService) {
    }

    ngOnInit(): void {
       /** this.secretariatService.getSecretaire(+params['username']))
          .subscribe(hero => this.hero = hero);*/ ;
    }

    /**
     * Sendd users.csv to API
     */
    public sendFile() {
        console.log(this.inputFile);
    }
}