import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGE_PATHS } from '../../constants';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        title: 'Inicio de sesión',
        path: PAGE_PATHS.AUTH.LOGIN,
        loadComponent: () => import('./pages/login-page/login-page.component').then((c) => c.LoginPageComponent),
      },
      {
        path: PAGE_PATHS.ALL,
        redirectTo: PAGE_PATHS.AUTH.LOGIN,
      },
    ],
  },
  {
    path: PAGE_PATHS.ALL,
    redirectTo: PAGE_PATHS.NOT_FOUND,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
