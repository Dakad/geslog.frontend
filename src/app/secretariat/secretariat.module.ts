import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import SecretariatService from './secretariat.service';
import SecretariatComponent from './secretariat.component';


@NgModule({
    declarations: [SecretariatComponent],
    exports: [],
    imports: [CommonModule, FormsModule],
    providers: [SecretariatService],
})
export class SecretariatModule { }
