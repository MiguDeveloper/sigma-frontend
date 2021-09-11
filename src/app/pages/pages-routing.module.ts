import { DashboardComponent } from './dashboard/dashboard.component';
import { SgModulesRoutes } from './../utils/sg-routes';
import { Constants } from './../utils/constants';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: Constants.ROUTES.CLEAN,
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: SgModulesRoutes.UiElements,
        loadChildren: () =>
          import('./ui-elements/ui-elements.module').then(
            (m) => m.UiElementsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
