import {Routes, RouterModule}  from '@angular/router';

import {ComComponent} from './com.component';
import {ModuleWithProviders} from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ComComponent,
    children: []
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
