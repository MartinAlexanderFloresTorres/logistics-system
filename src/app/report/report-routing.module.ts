import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGE_PATHS } from '../../constants';

const routes: Routes = [
  {
    path: PAGE_PATHS.REPORTS.INDEX,
    children: [
      {
        title: 'Reporte de ordenes de compra',
        path: PAGE_PATHS.REPORTS.PURCHASE_ORDERS,
        loadComponent: () => import('./pages/purchase-order-page/purchase-order-page.component').then((m) => m.PurchaseOrderPageComponent),
      },

      {
        title: 'Reporte de ordenes de servicio',
        path: PAGE_PATHS.REPORTS.PURCHASE_SERVICES,
        loadComponent: () => import('./pages/purchase-service-page/purchase-service-page.component').then((m) => m.PurchaseServicePageComponent),
      },

      {
        title: 'Reporte de vales de salida',
        path: PAGE_PATHS.REPORTS.VOUCHER_OUTPUTS,
        loadComponent: () => import('./pages/voucher-output-page/voucher-output-page.component').then((m) => m.VoucherOutputPageComponent),
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
export class ReportRoutingModule {}
