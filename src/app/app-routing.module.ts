import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { LoginComponent } from './login/login.component';
import PageNotFoundComponent from './page-not-found.component';
import FlashMsgComponent from './flash-msg.component';

const routes: Routes = [
  { path: 'msg', component: FlashMsgComponent, outlet: 'flashMsg' },
  { path: '', component: LoginComponent },
  { path: 'logout', redirectTo: '' },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'stud',
    loadChildren: 'app/stud/stud.module#StudModule',
    // canActivate: [AuthGuard]
  },


  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes,
  { preloadingStrategy: SelectivePreloadingStrategy }
);
