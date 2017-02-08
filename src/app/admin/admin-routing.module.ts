import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CanDeactivateGuard } from '../services/can-deactivate-guard.service';
// import { AuthGuard } from '../services/auth-guard.service';
// import { SelectivePreloadingStrategy } from '../selective-preloading-strategy';

import PageNotFoundComponent from '../page-not-found.component';
import FlashMsgComponent from '../flash-msg.component';

import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'admin', component: AdminComponent, outlet: 'admin' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
