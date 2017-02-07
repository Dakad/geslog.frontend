import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { StudRoutingModule } from './stud-routing.module';
import { GeslogService } from '../services/geslog-api.service';

import { StudComponent } from './stud.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StudRoutingModule
    ],
    exports: [],
    declarations: [StudComponent],
    providers: [GeslogService],
})
export class StudModule { }
