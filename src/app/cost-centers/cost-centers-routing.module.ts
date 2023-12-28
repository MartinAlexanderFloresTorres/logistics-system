import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGE_PATHS } from '../../constants';

const routes: Routes = [
  {
    path: PAGE_PATHS.COST_CENTERS.PATH,
    children: [
      {
        title: 'Centros de costo',
        path: PAGE_PATHS.COST_CENTERS.INDEX,
        loadComponent: () => import('./pages/list-page/list-page.component').then((m) => m.ListPageComponent),
      },
    ],
  },

  // ALL OTHERS REDIRECT TO NOT FOUND
  {
    path: PAGE_PATHS.ALL,
    redirectTo: PAGE_PATHS.NOT_FOUND,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostCentersRoutingModule {}
