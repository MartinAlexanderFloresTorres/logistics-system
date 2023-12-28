import { Routes } from '@angular/router';
import { PAGE_PATHS } from '../constants';
import { privateGuard } from './guards/private.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // ROOT REDIRECT TO AUTH
  {
    path: '',
    pathMatch: 'full',
    redirectTo: PAGE_PATHS.AUTH.PATH,
  },
  // AUTH
  {
    canMatch: [authGuard],
    path: PAGE_PATHS.AUTH.PATH,
    title: 'Seguridad',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  // PRIVATE
  {
    canMatch: [privateGuard],
    path: '',
    title: 'Panel de control',
    loadComponent: () => import('./shared/layouts/private-layout/private-layout.component').then((m) => m.PrivateLayoutComponent),
    children: [
      // ROOT REDIRECT TO DASHBOARD
      {
        path: '',
        pathMatch: 'full',
        redirectTo: PAGE_PATHS.DASHBOARD.PATH,
      },
      {
        // DASHBOARD
        path: PAGE_PATHS.DASHBOARD.PATH,
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
  // ALL OTHERS REDIRECT TO NOT FOUND
  {
    path: PAGE_PATHS.ALL,
    redirectTo: PAGE_PATHS.NOT_FOUND,
  },
  // NOT FOUND
  {
    title: 'Página no encontrada',
    path: PAGE_PATHS.NOT_FOUND,
    loadComponent: () => import('./shared/pages/not-found-page/not-found-page.component').then((m) => m.NotFoundPageComponent),
  },
];
