import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGE_PATHS } from '../../constants';

const routes: Routes = [
  {
    path: PAGE_PATHS.SECURITY.INDEX,
    children: [
      {
        title: 'Usuarios',
        path: PAGE_PATHS.SECURITY.USERS,
        loadComponent: () => import('./pages/users-page/users-page.component').then((m) => m.UsersPageComponent),
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
export class SecurityRoutingModule {}
