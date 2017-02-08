import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudComponent } from './stud.component';


const routes: Routes = [
    { path: '', component: StudComponent },
    { path: '**', component: StudComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class StudRoutingModule { }