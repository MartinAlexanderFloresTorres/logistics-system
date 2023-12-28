import { Routes } from '@angular/router';
import { PAGE_PATHS } from '../constants';
import { privateGuard } from './guards/private.guard';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

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
      // ADMIN CATEGORIES
      {
        canMatch: [adminGuard],
        path: PAGE_PATHS.ADMIN.PATH,
        loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule),
      },
      // ADMIN COST CENTERS
      {
        canMatch: [adminGuard],
        path: PAGE_PATHS.ADMIN.PATH,
        loadChildren: () => import('./cost-centers/cost-centers.module').then((m) => m.CostCentersModule),
      },
      // ADMIN BRANDS
      {
        canMatch: [adminGuard],
        path: PAGE_PATHS.ADMIN.PATH,
        loadChildren: () => import('./brand/brand.module').then((m) => m.BrandModule),
      },
      // ADMIN PRODUCTS
      {
        canMatch: [adminGuard],
        path: PAGE_PATHS.ADMIN.PATH,
        loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
      },
      // ADMIN SUPPLIERS
      {
        canMatch: [adminGuard],
        path: PAGE_PATHS.ADMIN.PATH,
        loadChildren: () => import('./supplier/supplier.module').then((m) => m.SupplierModule),
      },
      // ADMIN UNITS
      {
        canMatch: [adminGuard],
        path: PAGE_PATHS.ADMIN.PATH,
        loadChildren: () => import('./unit/unit.module').then((m) => m.UnitModule),
      },

      // KARDEX
      {
        path: PAGE_PATHS.KARDEX.PATH,
        loadChildren: () => import('./kardex/kardex.module').then((m) => m.KardexModule),
      },

      // PURCHASE ORDERS
      {
        path: PAGE_PATHS.PURCHASE_ORDERS.PATH,
        loadChildren: () => import('./purchase-order/purchase-order.module').then((m) => m.PurchaseOrderModule),
      },
      // PURCHASE SERVICES
      {
        path: PAGE_PATHS.PURCHASE_SERVICES.PATH,
        loadChildren: () => import('./purchase-service/purchase-service.module').then((m) => m.PurchaseServiceModule),
      },
      // VOUCHER ENTRY
      {
        path: PAGE_PATHS.VOUCHER_ENTRIES.PATH,
        loadChildren: () => import('./voucher-entrie/voucher-entrie.module').then((m) => m.VoucherEntrieModule),
      },
      // VOUCHER OUTPUT
      {
        path: PAGE_PATHS.VOUCHER_OUTPUTS.PATH,
        loadChildren: () => import('./voucher-output/voucher-output.module').then((m) => m.VoucherOutputModule),
      },
      // REPORTS
      {
        path: PAGE_PATHS.REPORTS.PATH,
        loadChildren: () => import('./report/report.module').then((m) => m.ReportModule),
      },
      // SECURITY
      {
        path: PAGE_PATHS.SECURITY.PATH,
        loadChildren: () => import('./security/security.module').then((m) => m.SecurityModule),
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
