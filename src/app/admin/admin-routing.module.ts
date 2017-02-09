import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CanDeactivateGuard } from '../services/can-deactivate-guard.service';
// import { AuthGuard } from '../services/auth-guard.service';
// import { SelectivePreloadingStrategy } from '../selective-preloading-strategy';

import { ProfilComponent } from './profil/profil.component';
import { AppliComponent } from './appli/appli.component';
import { UserAddComponent } from './user/add/user-add.component';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { UserComponent } from './user/user.component';




const routes: Routes = [{
  path: '', children: [
    {
      path: '', component: AdminComponent, children: [

        { path: 'applis', component: AppliComponent },
        { path: 'applis', children: [
          { path: '', component: AppliComponent },
          { path: '/:id', component: AppliComponent },
          { path: '/add', component: AppliComponent },
        ]},
        { path: 'profils', component: ProfilComponent },
        { path: 'users', component: UserComponent },
        { path: 'users/add', component: UserAddComponent },
        { path: '', component: AdminDashboardComponent }
      ]
    },

    { path: '**', component: AdminComponent }
  ],
}, {
  path: '**', component: AdminComponent
}

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }